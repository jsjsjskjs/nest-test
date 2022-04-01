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
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const get_driver_decorator_1 = require("../auth/get-driver.decorator");
const confilct_409_dto_1 = require("../common/response/swegger/confilct.409.dto");
const created_201_dto_1 = require("../common/response/swegger/created.201.dto");
const driver_findid_ok_200_dto_1 = require("../common/response/swegger/driver.findid.ok.200.dto");
const driver_signin_ok_200_dto_1 = require("../common/response/swegger/driver.signin.ok.200.dto");
const driver_unauthorized_401_dto_1 = require("../common/response/swegger/driver.unauthorized.401.dto");
const ok_200_swegger_dto_1 = require("../common/response/swegger/ok.200.swegger.dto");
const unprocessable_422_dto_1 = require("../common/response/swegger/unprocessable.422.dto");
const Driver_1 = require("../entities/Driver");
const driver_service_1 = require("./driver.service");
const findId_email_dto_1 = require("./dto/findId-email.dto");
const findId_phone_dto_1 = require("./dto/findId-phone.dto");
const findpw_email_dto_1 = require("./dto/findpw-email.dto");
const signin_driver_dto_1 = require("./dto/signin-driver.dto");
const signup_driver_dto_1 = require("./dto/signup-driver.dto");
let DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    signupDriver(body) {
        return this.driverService.signupDriver(body.driverName, body.driverPassword, body.driverIdentity, body.driverPhone, body.driverEmail);
    }
    signinDriver(body) {
        return this.driverService.signinDriver(body.driverName, body.driverPassword);
    }
    findIdPhone(body) {
        return this.driverService.findIdPhone(body.driverIdentity, body.driverPhone);
    }
    findIdEmail(body) {
        return this.driverService.findIdEmail(body.driverIdentity, body.driverEmail);
    }
    findPwPhone() { }
    findPwEmail(body) {
        return this.driverService.findPwEmail(body.driverIdentity, body.driverName);
    }
    test(driver) {
        console.log(driver);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '드라이버 회원가입' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: '201 Created', type: created_201_dto_1.CreatedDto }),
    (0, swagger_1.ApiResponse)({ status: 409, description: '409 Conflict', type: confilct_409_dto_1.ConflictDto }),
    (0, swagger_1.ApiResponse)({
        status: 422,
        description: '422 Unprocessable Entity',
        type: unprocessable_422_dto_1.UnprocessableDto
    }),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_driver_dto_1.SignupDriverDto]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "signupDriver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '드라이버 로그인' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '200 OK', type: driver_signin_ok_200_dto_1.DriverSigninOkDto }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: '401 Unauthorized',
        type: driver_unauthorized_401_dto_1.DriverUnauthorizedDto
    }),
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_driver_dto_1.SigninDriverDto]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "signinDriver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이디 찾기(핸드폰)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '200 OK',
        type: driver_findid_ok_200_dto_1.DriverFindIdOkDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: '401 Unautorized',
        type: driver_unauthorized_401_dto_1.DriverUnauthorizedDto
    }),
    (0, common_1.Post)('id-phone'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findId_phone_dto_1.FindIdPhoneDto]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "findIdPhone", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이디 찾기(이메일)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '200 OK',
        type: driver_findid_ok_200_dto_1.DriverFindIdOkDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: '401 Unautorized',
        type: driver_unauthorized_401_dto_1.DriverUnauthorizedDto
    }),
    (0, common_1.Post)('id-email'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findId_email_dto_1.FindIdEmailDto]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "findIdEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '비밀번호 찾기(핸드폰)' }),
    (0, common_1.Post)('pw-phone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "findPwPhone", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '비밀번호 찾기(이메일)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '200 OK', type: ok_200_swegger_dto_1.OkDto }),
    (0, common_1.Post)('pw-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findpw_email_dto_1.FindPwEmailDto]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "findPwEmail", null);
__decorate([
    (0, common_1.Post)('test'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, get_driver_decorator_1.GetDriver)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Driver_1.Driver]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "test", null);
DriverController = __decorate([
    (0, common_1.Controller)('driver'),
    __metadata("design:paramtypes", [driver_service_1.DriverService])
], DriverController);
exports.DriverController = DriverController;
//# sourceMappingURL=driver.controller.js.map