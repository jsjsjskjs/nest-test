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
exports.Truck = void 0;
const typeorm_1 = require("typeorm");
const Fryer_1 = require("./Fryer");
const Order_1 = require("./Order");
const Wok_1 = require("./Wok");
const WokStuff_1 = require("./WokStuff");
const FryerStuff_1 = require("./FryerStuff");
const Menu_1 = require("./Menu");
const Driver_1 = require("./Driver");
const core_entity_1 = require("../common/entites/core.entity");
let Truck = class Truck extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'truck_id' }),
    __metadata("design:type", Number)
], Truck.prototype, "truck_id", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'truck_number', precision: 12 }),
    __metadata("design:type", Number)
], Truck.prototype, "truck_number", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Truck.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'truck_category', length: 255 }),
    __metadata("design:type", String)
], Truck.prototype, "truck_category", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'condition',
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], Truck.prototype, "condition", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'driver_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Truck.prototype, "driver_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'extra', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Truck.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_1.Order, (order) => order.truckNumber2),
    __metadata("design:type", Array)
], Truck.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Wok_1.Wok, (wok) => wok.truckNumber2),
    __metadata("design:type", Array)
], Truck.prototype, "woks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WokStuff_1.WokStuff, (wokStuff) => wokStuff.truckNumber2),
    __metadata("design:type", Array)
], Truck.prototype, "wokStuffs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Fryer_1.Fryer, (fryer) => fryer.truckNumber2),
    __metadata("design:type", Array)
], Truck.prototype, "fryers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FryerStuff_1.FryerStuff, (fryerStuff) => fryerStuff.truckNumber2),
    __metadata("design:type", Array)
], Truck.prototype, "fryerStuffs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Menu_1.Menu, (menu) => menu.truckCategory2),
    __metadata("design:type", Array)
], Truck.prototype, "menus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Driver_1.Driver, (driver) => driver.trucks, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'driver_name', referencedColumnName: 'driver_name' }]),
    __metadata("design:type", Driver_1.Driver)
], Truck.prototype, "driverName2", void 0);
Truck = __decorate([
    (0, typeorm_1.Index)('truck_number', ['truck_number'], { unique: true }),
    (0, typeorm_1.Index)('truck_category', ['truck_category'], { unique: true }),
    (0, typeorm_1.Index)('FK_TRUCK_driver_name', ['driver_name'], {}),
    (0, typeorm_1.Entity)('TRUCK', { schema: 'shinstarr_app' })
], Truck);
exports.Truck = Truck;
//# sourceMappingURL=Truck.js.map