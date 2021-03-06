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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const Driver_1 = require("../entities/Driver");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const UnauthorizedRes = require("../common/response/unauthorized.401");
let AuthService = class AuthService {
    constructor(driverRepository, jwtService) {
        this.driverRepository = driverRepository;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger('AuthService');
    }
    async findDriver(driverName) {
        const driver = await this.driverRepository.findOne({
            where: { driver_name: driverName },
            select: ['driver_pw']
        });
        return driver;
    }
    async sendAccessTokenDriver(driverName, driverPassword) {
        const driver = await this.findDriver(driverName);
        if (driver && (await bcrypt.compare(driverPassword, driver.driver_pw))) {
            const payload = { driverName };
            const accessToken = await this.jwtService.sign(payload, {
                secret: process.env.ACCESS_SECRET,
                expiresIn: '30m'
            });
            return { message: 'ok', code: 200, data: { accessToken } };
        }
        else {
            throw new common_1.UnauthorizedException(UnauthorizedRes);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Driver_1.Driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map