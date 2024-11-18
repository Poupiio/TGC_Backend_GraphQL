import { Ad } from "src/entities/Ad";
import { Category } from "../entities/Category";
import { Field, ID, InputType } from "type-graphql";

@InputType()
class UpdateAdInput implements Partial<Ad> {
   @Field()
   id: number;

   @Field({ nullable: true })
   title?: string;

   @Field({ nullable: true })
   description?: string;

   @Field({ nullable: true })
   owner?: string;

   @Field(() => [String], { nullable: true })
   picturesUrls?: string[];

   @Field({ nullable: true })
   price?: number;

   @Field({ nullable: true })
   location?: string;

   @Field({ nullable: true })
   createdAt?: Date;

   @Field(() => ID)
   category?: Category;
}

export default UpdateAdInput;