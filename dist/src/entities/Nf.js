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
exports.Nf = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../common/entites/core.entity");
let Nf = class Nf extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "nf_id" }),
    __metadata("design:type", Number)
], Nf.prototype, "nfId", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "size", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Nf.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "calories", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Nf.prototype, "calories", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "sodium", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Nf.prototype, "sodium", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "carbohydrate", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Nf.prototype, "carbohydrate", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "sugars", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Nf.prototype, "sugars", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "protein", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Nf.prototype, "protein", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "menu_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Nf.prototype, "menuName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "user_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Nf.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "extra", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Nf.prototype, "extra", void 0);
Nf = __decorate([
    (0, typeorm_1.Entity)("NF", { schema: "shinstarr_app" })
], Nf);
exports.Nf = Nf;
//# sourceMappingURL=Nf.js.map