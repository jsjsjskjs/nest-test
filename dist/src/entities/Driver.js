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
exports.Driver = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../common/entites/core.entity");
const Truck_1 = require("./Truck");
let Driver = class Driver extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'driver_id' }),
    __metadata("design:type", Number)
], Driver.prototype, "driver_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'driver_name', length: 255 }),
    __metadata("design:type", String)
], Driver.prototype, "driver_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'driver_pw', length: 255, select: false }),
    __metadata("design:type", String)
], Driver.prototype, "driver_pw", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'driver_identity', length: 255 }),
    __metadata("design:type", String)
], Driver.prototype, "driver_identity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'driver_phone', length: 255 }),
    __metadata("design:type", String)
], Driver.prototype, "driver_phone", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'driver_email', length: 255 }),
    __metadata("design:type", String)
], Driver.prototype, "driver_email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'extra', nullable: true, length: 255, select: false }),
    __metadata("design:type", String)
], Driver.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Truck_1.Truck, (truck) => truck.driverName2),
    __metadata("design:type", Array)
], Driver.prototype, "trucks", void 0);
Driver = __decorate([
    (0, typeorm_1.Index)('driver_name', ['driver_name'], { unique: true }),
    (0, typeorm_1.Entity)('DRIVER', { schema: 'shinstarr_app' })
], Driver);
exports.Driver = Driver;
//# sourceMappingURL=Driver.js.map