"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const nest_morgan_1 = require("nest-morgan");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const driver_module_1 = require("./driver/driver.module");
const auth_module_1 = require("./auth/auth.module");
const ORMCONFIG = require("../ormconfig");
const EMAILCONFIG = require("../emailconfig");
const mailer_1 = require("@nestjs-modules/mailer");
const user_module_1 = require("./user/user.module");
const nest_aws_sdk_1 = require("nest-aws-sdk");
const health_module_1 = require("./health/health.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_aws_sdk_1.AwsSdkModule.forRoot({
                defaultServiceOptions: {
                    accessKeyId: process.env.DEPLOY_ACCESS_KEY_ID,
                    secretAccessKey: process.env.DEPLOY_SERECT_ACCESS_KEY,
                    region: process.env.DEPLOY_REGION
                }
            }),
            mailer_1.MailerModule.forRoot(EMAILCONFIG),
            typeorm_1.TypeOrmModule.forRoot(ORMCONFIG),
            nest_morgan_1.MorganModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                ignoreEnvFile: process.env.NODE_ENV === 'production'
            }),
            driver_module_1.DriverModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            health_module_1.HealthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            config_1.ConfigService,
            { provide: core_1.APP_INTERCEPTOR, useClass: (0, nest_morgan_1.MorganInterceptor)('combined') }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map