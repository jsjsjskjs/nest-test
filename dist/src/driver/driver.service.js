"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Driver_1 = require("../entities/Driver");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const auth_service_1 = require("../auth/auth.service");
const ConflictRes = require("../common/response/conflict.409");
const CreatedRes = require("../common/response/created.201");
const mailer_1 = require("@nestjs-modules/mailer");
const UnauthorizedRes = require("../common/response/unauthorized.401");
const OkRes = require("../common/response/ok.200");
const ServiceUnavailableRes = require("../common/response/service-unavailable.503");
const aws_sdk_1 = require("aws-sdk");
let DriverService = class DriverService {
    constructor(driverRepository, authService, mailerService) {
        this.driverRepository = driverRepository;
        this.authService = authService;
        this.mailerService = mailerService;
        this.logger = new common_1.Logger('DriverService');
    }
    async findDriver(driverName) {
        try {
            this.logger.debug(`passport ????????? ?????? ??????: ${driverName}`);
            return this.driverRepository.findOne({
                where: { driver_name: driverName }
            });
        }
        catch (error) {
            this.logger.error('???????????? ?????? ??????');
        }
    }
    async findDriverIdentity(driverIdentity) {
        try {
            return this.driverRepository.findOne({
                where: { driver_identity: driverIdentity }
            });
        }
        catch (error) {
            this.logger.error('???????????? ?????? ??????');
        }
    }
    async signupDriver(driverName, driverPassword, driverIdentity, driverPhone, driverEmail) {
        const driver = await this.findDriver(driverName);
        console.log('check!!!!!', driver);
        this.logger.debug(`???????????? ????????? ??????: ${driver}`);
        if (driver) {
            throw new common_1.ConflictException(ConflictRes);
        }
        else {
            const encrypedPW = await bcrypt.hashSync(driverPassword, 10);
            const createdData = await this.driverRepository.save(this.driverRepository.create({
                driver_name: driverName,
                driver_pw: encrypedPW,
                driver_identity: driverIdentity,
                driver_phone: driverPhone,
                driver_email: driverEmail
            }));
            return CreatedRes;
        }
    }
    async signinDriver(driverName, driverPassword) {
        return this.authService.sendAccessTokenDriver(driverName, driverPassword);
    }
    async findIdPhone(driverIdentity, driverPhone) {
        const driver = await this.findDriverIdentity(driverIdentity);
        if (driver && driverPhone === driver.driver_phone) {
            return {
                message: 'ok',
                code: 200,
                data: { driver_name: driver.driver_name }
            };
        }
        else {
            throw new common_1.UnauthorizedException(UnauthorizedRes);
        }
    }
    async findIdEmail(driverIdentity, driverEmail) {
        const driver = await this.findDriverIdentity(driverIdentity);
        if (driver && driverEmail === driver.driver_email) {
            return {
                message: 'ok',
                code: 200,
                data: { driver_name: driver.driver_name }
            };
        }
        else {
            throw new common_1.UnauthorizedException(UnauthorizedRes);
        }
    }
    async findPwEmail(driverIdentity, driverName) {
        const driver = await this.driverRepository.findOne({
            where: { driver_identity: driverIdentity, driver_name: driverName }
        });
        if (driver) {
            const emailSuccess = await this.sendEmail(driver.driver_email, driver.driver_identity);
            if (emailSuccess) {
                return OkRes;
            }
            throw new common_1.ServiceUnavailableException(ServiceUnavailableRes);
        }
        else {
            throw new common_1.UnauthorizedException(UnauthorizedRes);
        }
    }
    async findPwPhone(driverIdentity, driverName) {
        const driver = await this.driverRepository.findOne({
            where: { driver_identity: driverIdentity, driver_name: driverName }
        });
        if (driver) {
            this.test();
            return OkRes;
        }
        else {
            throw new common_1.UnauthorizedException(UnauthorizedRes);
        }
    }
    async generateRandomPassword() {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*';
        const stringLength = 8;
        let randomString = '';
        for (let n = 0; n < stringLength; n++) {
            let randomNum = Math.floor(Math.random() * chars.length);
            randomString += chars.substring(randomNum, randomNum + 1);
        }
        return randomString;
    }
    async sendEmail(driverEmail, driverIdentity) {
        const password = await this.generateRandomPassword();
        console.log('check!!!', password);
        return this.mailerService
            .sendMail({
            to: `${driverEmail}`,
            from: `shinstarr@shinstarr.com`,
            subject: `${driverIdentity}???! Shinstarr App ?????????????????? ??????????????????.`,
            html: `
        <style>
          div { 
            border: 1px solid black; 
            text-align: center; 
            padding: 20px; 
            width: 70%;
          }
          a { color: white; text-decoration-line: none }
          h1 { margin-bottom: 20px; font-size: 50px; }
          p { font-size: 15px; margin-botton: 10px; }
          span { font-weight: bold; }
          button { background-color: black; width: 150px; height: 35px; border-radius: 6px; }
        </style>
        <div>
          <h1>Shinstarr App</h1><br />
          <p>???????????????. <span>${driverIdentity}</span>???, ?????? ??????????????????.</p><br />
          <p>?????? ??????????????? ????????? ?????? ????????????????????????.</p><br />
          <p>?????? ???????????? : <span>${password}</span></p><br />
        </div>
      `
        })
            .then(() => {
            this.logger.debug('email ?????? ??????');
            return true;
        })
            .catch((e) => {
            this.logger.debug(`${e.message}`);
            this.logger.error('email ?????? ??????');
            return false;
        });
    }
    async test() {
        const password = await this.generateRandomPassword();
        aws_sdk_1.config.update({
            region: 'us-west-1',
            accessKeyId: process.env.DEPLOY_ACCESS_KEY_ID,
            secretAccessKey: process.env.DEPLOY_SERECT_ACCESS_KEY
        });
        const params = {
            Message: `Shinstarr App TEST MESSAGE | ${password}`,
            PhoneNumber: '+8201056325968'
        };
        const publishTextPromise = new aws_sdk_1.SNS({ apiVersion: '2010-03-31' })
            .publish(params)
            .promise();
        publishTextPromise
            .then(function (data) {
            console.log('MessageID is' + data.MessageId);
        })
            .catch(function (err) {
            console.error(err, err.stack);
        });
    }
};
DriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Driver_1.Driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService,
        mailer_1.MailerService])
], DriverService);
exports.DriverService = DriverService;
//# sourceMappingURL=driver.service.js.map