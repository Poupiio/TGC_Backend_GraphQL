import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";
import { Field, ID, InputType } from "type-graphql";
import AdTagInput from "./AdTagInput";

@InputType()
class AdInput implements Partial<Ad> {
   @Field()
   title: string;

   @Field()
   description?: string;

   @Field()
   owner: string;
   
   @Field()
   price: number;

   @Field()
   location: string;

   @Field()
   createdAt: Date;

   @Field(() => ID, { nullable: true })
   category: Category;

   @Field(() => [String], { nullable: true })
   picturesUrl?: string[];

   @Field(() => [AdTagInput], { nullable: true })
   adTags?: AdTagInput[];
}

export default AdInput;