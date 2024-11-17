import { Tag } from "../entities/Tag";
import { Field, InputType, ID } from "type-graphql";

@InputType()
class AdTagInput implements Partial<Tag> {
   @Field(() => ID)
   id: number;
}

export default AdTagInput;