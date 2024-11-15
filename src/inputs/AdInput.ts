import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";
import { Field, ID, InputType } from "type-graphql";

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

   @Field(() => ID)
   category: Category;

   @Field(() => [String], { nullable: true })
   picturesUrl?: string[];
}

export default AdInput;