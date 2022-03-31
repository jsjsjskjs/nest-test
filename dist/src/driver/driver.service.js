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
let DriverService = class DriverService {
    constructor(driverRepository, authService) {
        this.driverRepository = driverRepository;
        this.authService = authService;
        this.logger = new common_1.Logger('DriverService');
    }
    async findDriver(driverName) {
        try {
            this.logger.debug(`passport 사용자 확인 체크: ${driverName}`);
            return this.driverRepository.findOne({
                where: { driver_name: driverName }
            });
        }
        catch (error) {
            this.logger.error('드라이버 찾기 에러');
        }
    }
    async findDriverIdentity(driverIdentity) {
        try {
            return this.driverRepository.findOne({
                where: { driver_identity: driverIdentity }
            });
        }
        catch (error) {
            this.logger.error('드라이버 찾기 에러');
        }
    }
    async signupDriver(driverName, driverPassword, driverIdentity, driverPhone, driverEmail) {
        const driver = await this.findDriver(driverName);
        console.log('check!!!!!', driver);
        this.logger.debug(`드라이버 사용자 확인: ${driver}`);
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
        return this.authService.sendAccessToken(driverName, driverPassword);
    }
};
DriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Driver_1.Driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], DriverService);
exports.DriverService = DriverService;
//# sourceMappingURL=driver.service.js.map