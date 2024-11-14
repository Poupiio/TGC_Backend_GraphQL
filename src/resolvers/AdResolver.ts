import AdInput from "../inputs/AdInput";
import { Ad } from "../entities/Ad";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import UpdateAdInput from "../inputs/UpdateAdInput";

@Resolver(Ad)
export class AdResolver {
   @Query(() => [Ad])
   async getAllAds() {
      const ads = await Ad.find({
         order: {
           id: "DESC",
         },
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
      newAd.picture = newData.picture;
      newAd.location = newData.location;
      newAd.createdAt = newData.createdAt;
      newAd.category = newData.category;

      const adToSave = await newAd.save();
      return adToSave;
   }

   @Mutation(() => String)
   async removeAd(@Arg("id") id: number) {
      await Ad.delete(id);
      return "The ad has been successfully deleted!";
   }

   @Mutation(() => Ad)
   async updateAd(@Arg("data") dataToUpdate: UpdateAdInput) {
      let adToUpdate = await Ad.findOneByOrFail({ id: dataToUpdate.id });
      adToUpdate = Object.assign(adToUpdate, dataToUpdate);
   
      const adUpdated = await adToUpdate.save();
      return adUpdated;
   }
}