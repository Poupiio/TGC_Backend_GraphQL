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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdResolver = void 0;
const Ad_1 = require("../entities/Ad");
const type_graphql_1 = require("type-graphql");
let AdResolver = class AdResolver {
    async getAllAds() {
        const ads = await Ad_1.Ad.find({
            order: {
                id: "DESC",
            },
        });
        console.log(ads);
        return ads;
    }
    async getAdById(id) {
        const ad = await Ad_1.Ad.findOneByOrFail({ id: id });
        return ad;
    }
    async createNewAd(title, description, owner, price, picture, location, createdAt) {
        const newAd = new Ad_1.Ad();
        newAd.title = title;
        newAd.description = description;
        newAd.owner = owner;
        newAd.price = price;
        newAd.picture = picture;
        newAd.location = location;
        newAd.createdAt = createdAt;
        const adToSave = await newAd.save();
        return adToSave;
    }
};
exports.AdResolver = AdResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Ad_1.Ad]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "getAllAds", null);
__decorate([
    (0, type_graphql_1.Query)(() => Ad_1.Ad),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "getAdById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Ad_1.Ad),
    __param(0, (0, type_graphql_1.Arg)("title")),
    __param(1, (0, type_graphql_1.Arg)("description")),
    __param(2, (0, type_graphql_1.Arg)("owner")),
    __param(3, (0, type_graphql_1.Arg)("price")),
    __param(4, (0, type_graphql_1.Arg)("picture")),
    __param(5, (0, type_graphql_1.Arg)("location")),
    __param(6, (0, type_graphql_1.Arg)("createdAt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String, String, Date]),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "createNewAd", null);
exports.AdResolver = AdResolver = __decorate([
    (0, type_graphql_1.Resolver)(Ad_1.Ad)
], AdResolver);
//# sourceMappingURL=AdResolver.js.map