import { Picture } from "../entities/Picture";
import { Field, InputType } from "type-graphql";

@InputType()
class PictureInput implements Partial<Picture> {
   @Field()
   url: string;
}

export default PictureInput;