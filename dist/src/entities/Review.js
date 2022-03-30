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
exports.Review = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../common/entites/core.entity");
const Menu_1 = require("./Menu");
const User_1 = require("./User");
let Review = class Review extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "review_id" }),
    __metadata("design:type", Number)
], Review.prototype, "review_id", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "rating", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "review_content", nullable: true }),
    __metadata("design:type", String)
], Review.prototype, "review_content", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "user_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Review.prototype, "user_name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "menu_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Review.prototype, "menu_name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "extra", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Review.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.reviews, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'user_name', referencedColumnName: 'user_name' }]),
    __metadata("design:type", User_1.User)
], Review.prototype, "userName2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Menu_1.Menu, (menu) => menu.reviews, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'menu_name', referencedColumnName: 'menu_name' }]),
    __metadata("design:type", Menu_1.Menu)
], Review.prototype, "menuName2", void 0);
Review = __decorate([
    (0, typeorm_1.Index)("FK_REVIEW_user_name", ["user_name"], {}),
    (0, typeorm_1.Entity)("REVIEW", { schema: "shinstarr_app" })
], Review);
exports.Review = Review;
//# sourceMappingURL=Review.js.map