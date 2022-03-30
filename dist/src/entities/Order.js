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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../common/entites/core.entity");
const Truck_1 = require("./Truck");
const User_1 = require("./User");
let Order = class Order extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'order_id' }),
    __metadata("design:type", Number)
], Order.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'order_list', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Order.prototype, "order_list", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'order_price', nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Order.prototype, "order_price", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'payment_time', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "payment_time", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'delivery_time', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "delivery_time", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'order_cooking_time', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "order_cooking_time", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'delivery_info', nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Order.prototype, "delivery_info", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'order_payment_info',
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Order.prototype, "order_payment_info", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'order_state', nullable: true, default: () => "'1'" }),
    __metadata("design:type", Number)
], Order.prototype, "order_state", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Order.prototype, "user_name", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'truck_number', nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Order.prototype, "truck_number", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'extra', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Order.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.orders, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'user_name', referencedColumnName: 'user_name' }]),
    __metadata("design:type", User_1.User)
], Order.prototype, "userName2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Truck_1.Truck, (truck) => truck.orders, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'truck_number', referencedColumnName: 'truck_number' }]),
    __metadata("design:type", Truck_1.Truck)
], Order.prototype, "truckNumber2", void 0);
Order = __decorate([
    (0, typeorm_1.Index)('FK_ORDER_user_name', ['user_name'], {}),
    (0, typeorm_1.Index)('FK_ORDER_truck_number', ['truck_number'], {}),
    (0, typeorm_1.Entity)('ORDER', { schema: 'shinstarr_app' })
], Order);
exports.Order = Order;
//# sourceMappingURL=Order.js.map