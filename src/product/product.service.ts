import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/createProduct.dto';
import { FilterProductDTO } from './dto/filterProduct.dto';
import { Product, ProductDocument} from './schema/product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private productModel:Model<ProductDocument>){}

    async createProduct(newProduct:CreateProductDTO) :Promise<CreateProductDTO>{
        const product = this.productModel.create(newProduct)
        return product
        
    }

    async getFilteredProducts(filterProduct:FilterProductDTO):Promise<Product[]>{
        const { category, search } = filterProduct;
        let products:Product[] = await this.getAllProducts();

        if (search) {
        products = products.filter(product => 
            product.name.includes(search) ||
            product.description.includes(search)
        );
        }

        if (category) {
        products = products.filter(product => product.category === category)
        }

        return products;
    }

    async getAllProducts():Promise<Product[]>{
        const products = await this.productModel.find().exec();
        return products;
    }

    async getProduct(id: string): Promise<Product> {
        const product = await this.productModel.findById(id).exec();
        return product;
      }
    
    async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = await this.productModel.create(createProductDTO);
    return newProduct.save();
    }
    
    async updateProduct(id: string, createProductDTO: CreateProductDTO): Promise<Product> {
    const updatedProduct = await this.productModel
        .findByIdAndUpdate(id, createProductDTO, { new: true });
    return updatedProduct;
    }

    async deleteProduct(id: string): Promise<any> {
    const deletedProduct = await this.productModel.findByIdAndRemove(id);
    return deletedProduct;
    }
    
}
