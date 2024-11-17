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
exports.TagResolver = void 0;
const TagInput_1 = __importDefault(require("../inputs/TagInput"));
const Tag_1 = require("../entities/Tag");
const type_graphql_1 = require("type-graphql");
let TagResolver = class TagResolver {
    async getAllTags() {
        const tags = await Tag_1.Tag.find();
        return tags;
    }
    async getTagById(id) {
        const tag = await Tag_1.Tag.findOneByOrFail({ id: id });
        return tag;
    }
    async createNewCategory(newData) {
        const newTag = new Tag_1.Tag();
        newTag.name = newData.name;
        const tagUpdated = await newTag.save();
        return tagUpdated;
    }
    async updateTag(id, dataToUpdate) {
        let tagToUpdate = await Tag_1.Tag.findOneByOrFail({ id: id });
        tagToUpdate = Object.assign(tagToUpdate, dataToUpdate);
        const tagUpdated = await tagToUpdate.save();
        return tagUpdated;
    }
    async removeCategory(id) {
        await Tag_1.Tag.delete(id);
        return "The tag has been successfully deleted!";
    }
};
exports.TagResolver = TagResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Tag_1.Tag]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "getAllTags", null);
__decorate([
    (0, type_graphql_1.Query)(() => Tag_1.Tag),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "getTagById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Tag_1.Tag),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TagInput_1.default]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "createNewCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Tag_1.Tag),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, TagInput_1.default]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "updateTag", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "removeCategory", null);
exports.TagResolver = TagResolver = __decorate([
    (0, type_graphql_1.Resolver)(Tag_1.Tag)
], TagResolver);
//# sourceMappingURL=TagResolver.js.map