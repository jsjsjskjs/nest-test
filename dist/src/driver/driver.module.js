"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const Driver_1 = require("../entities/Driver");
const driver_controller_1 = require("./driver.controller");
const driver_service_1 = require("./driver.service");
let DriverModule = class DriverModule {
};
DriverModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Driver_1.Driver]), auth_module_1.AuthModule],
        controllers: [driver_controller_1.DriverController],
        providers: [driver_service_1.DriverService]
    })
], DriverModule);
exports.DriverModule = DriverModule;
//# sourceMappingURL=driver.module.js.map