import AdInput from "../inputs/AdInput";
import { Ad } from "../entities/Ad";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import UpdateAdInput from "../inputs/UpdateAdInput";
import { Picture } from "../entities/Picture";
// import { Tag } from "../entities/Tag";

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
      const pictures: Picture[] = [];

      if (newData.picturesUrl) {
         newData.picturesUrl.forEach(el => {
            const newPicture = new Picture();
            newPicture.url = el;
            pictures.push(newPicture);
         })
      }

      const newAd = Ad.create({ 
         ...newData,
         pictures,
         tags: newData.adTags?.map((tag) => ({ id: parseInt(tag) }))
      });

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