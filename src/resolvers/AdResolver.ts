import AdInput from "../inputs/AdInput";
import { Ad } from "../entities/Ad";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Ad)
export class AdResolver {
   @Query(() => [Ad])
   async getAllAds() {
      const ads = await Ad.find({
         order: {
           id: "DESC",
         },
         relations: {

         }
      });
      return ads;
   }

   @Query(() => Ad)
   async getAdById(@Arg("id") id: number) {
      const ad = await Ad.findOneByOrFail({ id: id });
      return ad;
   }

   @Mutation(() => Ad)
   async createNewAd(@Arg("data") newData: AdInput) {
      const newAd = new Ad();
      newAd.title = newData.title;
      newAd.description = newData.description;
      newAd.owner = newData.owner;
      newAd.price = newData.price;
      newAd.location = newData.location;
      newAd.createdAt = newData.createdAt;
      newAd.category = newData.category;

      const adToSave = await newAd.save();
      return adToSave;
   }

   @Mutation(() => Ad)
   async removeAd(@Arg("id") id: number) {
      const adId = await Ad.findOneByOrFail({ id: id });
      await Ad.remove(adId);
      return `L'annonce ayant l'id ${adId} a bien été supprimée`;
   }
}