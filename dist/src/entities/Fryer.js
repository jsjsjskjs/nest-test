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
exports.Fryer = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../common/entites/core.entity");
const Truck_1 = require("./Truck");
let Fryer = class Fryer extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'fryer_id' }),
    __metadata("design:type", Number)
], Fryer.prototype, "fryer_id", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'spot1',
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], Fryer.prototype, "spot1", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'spot2',
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], Fryer.prototype, "spot2", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'spot3',
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], Fryer.prototype, "spot3", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'truck_number', nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Fryer.prototype, "truck_number", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'extra', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fryer.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Truck_1.Truck, (truck) => truck.fryers, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'truck_number', referencedColumnName: 'truck_number' }]),
    __metadata("design:type", Truck_1.Truck)
], Fryer.prototype, "truckNumber2", void 0);
Fryer = __decorate([
    (0, typeorm_1.Index)('FK_FRYER_truck_number', ['truck_number'], {}),
    (0, typeorm_1.Entity)('FRYER', { schema: 'shinstarr_app' })
], Fryer);
exports.Fryer = Fryer;
//# sourceMappingURL=Fryer.js.map