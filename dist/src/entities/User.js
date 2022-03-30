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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../common/entites/core.entity");
const Order_1 = require("./Order");
const Review_1 = require("./Review");
let User = class User extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'user_id' }),
    __metadata("design:type", Number)
], User.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_name', length: 255 }),
    __metadata("design:type", String)
], User.prototype, "user_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_pw', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "user_pw", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'user_phone', nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], User.prototype, "user_phone", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "user_email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'address', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_img', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "user_img", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_payment_info', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "user_payment_info", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'extra', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_1.Order, (order) => order.userName2),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Review_1.Review, (review) => review.userName2),
    __metadata("design:type", Array)
], User.prototype, "reviews", void 0);
User = __decorate([
    (0, typeorm_1.Index)('user_name', ['user_name'], { unique: true }),
    (0, typeorm_1.Entity)('USER', { schema: 'shinstarr_app' })
], User);
exports.User = User;
//# sourceMappingURL=User.js.map