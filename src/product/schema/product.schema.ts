import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";

export type ProductDocument = Product & Document;

@Schema()
export class Product{

    @Prop()
    id:string;

    @Prop()
    name:string;

    @Prop()
    description:string;

    @Prop()
    price:number;

    @Prop()
    category:string;

}

export const ProductSchema = SchemaFactory.createForClass(Product)