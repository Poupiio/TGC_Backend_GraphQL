import { Ad } from "src/entities/Ad";
import { Query, Resolver } from "type-graphql";

@Resolver(Ad)
export class AdResolver {
   @Query(() => Ad)
   getAllAds() {
      const ads = Ad.find({
         order: {
           id: "DESC",
         },
      });
      return ads;
   }
}