import { MaxLength } from "class-validator";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from 'type-graphql';
import { Category } from "./Category";
import { Tag } from "./Tag";

@ObjectType()
@Entity()
export class Ad extends BaseEntity {
   @Field()
   @PrimaryGeneratedColumn()
   id: number;
   
   @Field()
   @Column()
   title: string;
   
   @Field()
   @Column({ nullable: true })
   description?: string;
   
   @Field()
   @Column()
   owner: string;
   
   @Field()
   @Column()
   price: number;
   
   @Field()
   @Column()
   @MaxLength(2000)
   picture: string;
   
   @Field()
   @Column()
   location: string;
   
   @Field()
   @Column()
   createdAt: Date;

   // 1er paramètre : callback vide qui pointe vers la table associée
   // 2ème paramètre (optionnel) : préciser le champ auquel on fait référence dans l'autre table : définition de la clé étrangère
   // ManyToOne : many ads appartiennent à one category
   @Field(() => Category, { nullable: true })
   @ManyToOne(
      () => Category, category => category.ads, { eager: true }
   )
   category: Category;

   @ManyToMany(
      () => Tag, tag => tag.ads, { eager: true }
   )
   @JoinTable()
   // @JoinTable obligatoire sur Ad ou Tag => définit la création de la table de jointure
   tags: Tag[];
}