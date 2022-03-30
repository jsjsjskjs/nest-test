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
exports.Menu = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../common/entites/core.entity");
const Review_1 = require("./Review");
const Truck_1 = require("./Truck");
let Menu = class Menu extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'menu_id' }),
    __metadata("design:type", Number)
], Menu.prototype, "menu_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'menu_name', length: 255 }),
    __metadata("design:type", String)
], Menu.prototype, "menu_name", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'menu_price', nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Menu.prototype, "menu_price", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'menu_cooking_time', nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Menu.prototype, "menu_cooking_time", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'menu_content', nullable: true }),
    __metadata("design:type", String)
], Menu.prototype, "menu_content", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'origin', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Menu.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'truck_category', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Menu.prototype, "truck_category", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Menu.prototype, "user_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'extra', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Menu.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Review_1.Review, (review) => review.menuName2),
    __metadata("design:type", Array)
], Menu.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Truck_1.Truck, (truck) => truck.menus, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'truck_category', referencedColumnName: 'truck_category' }]),
    __metadata("design:type", Truck_1.Truck)
], Menu.prototype, "truckCategory2", void 0);
Menu = __decorate([
    (0, typeorm_1.Index)('menu_name', ['menu_name'], { unique: true }),
    (0, typeorm_1.Index)('FK_MENU_truck_category', ['truck_category'], {}),
    (0, typeorm_1.Entity)('MENU', { schema: 'shinstarr_app' })
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map