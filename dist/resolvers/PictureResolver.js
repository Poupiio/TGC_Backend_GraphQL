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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureResolver = void 0;
const PictureInput_1 = __importDefault(require("../inputs/PictureInput"));
const Picture_1 = require("../entities/Picture");
const type_graphql_1 = require("type-graphql");
let PictureResolver = class PictureResolver {
    async getAllPictures() {
        const pictures = await Picture_1.Picture.find();
        return pictures;
    }
    async getPictureById(id) {
        const picture = await Picture_1.Picture.findOneByOrFail({ id: id });
        return picture;
    }
    async createNewPicture(newData) {
        const newPicture = new Picture_1.Picture();
        newPicture.url = newData.url;
        const PictureUpdated = await newPicture.save();
        return PictureUpdated;
    }
    async updatePicture(id, dataToUpdate) {
        let PictureToUpdate = await Picture_1.Picture.findOneByOrFail({ id: id });
        PictureToUpdate = Object.assign(PictureToUpdate, dataToUpdate);
        const PictureUpdated = await PictureToUpdate.save();
        return PictureUpdated;
    }
    async removePicture(id) {
        await Picture_1.Picture.delete(id);
        return "The picture selected has been successfully deleted!";
    }
};
exports.PictureResolver = PictureResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Picture_1.Picture]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PictureResolver.prototype, "getAllPictures", null);
__decorate([
    (0, type_graphql_1.Query)(() => Picture_1.Picture),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PictureResolver.prototype, "getPictureById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Picture_1.Picture),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PictureInput_1.default]),
    __metadata("design:returntype", Promise)
], PictureResolver.prototype, "createNewPicture", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Picture_1.Picture),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, PictureInput_1.default]),
    __metadata("design:returntype", Promise)
], PictureResolver.prototype, "updatePicture", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PictureResolver.prototype, "removePicture", null);
exports.PictureResolver = PictureResolver = __decorate([
    (0, type_graphql_1.Resolver)(Picture_1.Picture)
], PictureResolver);
//# sourceMappingURL=PictureResolver.js.map