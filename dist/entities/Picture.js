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
exports.Picture = void 0;
const typeorm_1 = require("typeorm");
const Ad_1 = require("./Ad");
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let Picture = class Picture extends typeorm_1.BaseEntity {
};
exports.Picture = Picture;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Picture.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.MaxLength)(3000),
    __metadata("design:type", String)
], Picture.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Ad_1.Ad, (ad) => ad.pictures, { onDelete: "CASCADE" }),
    __metadata("design:type", Ad_1.Ad)
], Picture.prototype, "ad", void 0);
exports.Picture = Picture = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Picture);
//# sourceMappingURL=Picture.js.map