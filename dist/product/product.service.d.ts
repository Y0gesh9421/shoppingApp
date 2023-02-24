import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/createProduct.dto';
import { FilterProductDTO } from './dto/filterProduct.dto';
import { Product, ProductDocument } from './schema/product.schema';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    createProduct(newProduct: CreateProductDTO): Promise<CreateProductDTO>;
    getFilteredProducts(filterProduct: FilterProductDTO): Promise<Product[]>;
    getAllProducts(): Promise<Product[]>;
    getProduct(id: string): Promise<Product>;
    addProduct(createProductDTO: CreateProductDTO): Promise<Product>;
    updateProduct(id: string, createProductDTO: CreateProductDTO): Promise<Product>;
    deleteProduct(id: string): Promise<any>;
}
