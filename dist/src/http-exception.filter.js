"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const UnprocessableRes = require("./common/response/unprocessable.422");
const NotFoundRes = require("./common/response/not-found.404");
const UnauthorizedJwtRes = require("./common/response/unauthorized.jwt.401");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const err = exception.getResponse();
        if (typeof err !== 'string' && err.statusCode === 400) {
            return response.status(422).send(UnprocessableRes);
        }
        else if (err.statusCode === 404) {
            return response.status(404).send(NotFoundRes);
        }
        else if (err.statusCode === 401) {
            return response.status(401).send(UnauthorizedJwtRes);
        }
        response.status(status).json(err);
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map