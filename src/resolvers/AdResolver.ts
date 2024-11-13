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
      });
      return ads;
   }

   @Query(() => Ad)
   async getAdById(@Arg("id") id: number) {
      const ad = await Ad.findOneByOrFail({ id: id });
      return ad;
   }

   @Mutation(() => Ad)
   async createNewAd(
      @Arg("title") title: string,
      @Arg("description") description: string,
      @Arg("owner") owner: string,
      @Arg("price") price: number,
      @Arg("picture") picture: string,
      @Arg("location") location: string,
      @Arg("createdAt") createdAt: Date,
   ) {
      const newAd = new Ad();
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
}