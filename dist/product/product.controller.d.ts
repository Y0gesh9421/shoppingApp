import { CreateProductDTO } from './dto/createProduct.dto';
import { FilterProductDTO } from './dto/filterProduct.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(filterProductDTO: FilterProductDTO): Promise<import("./schema/product.schema").Product[]>;
    getProduct(id: string): Promise<import("./schema/product.schema").Product>;
    addProduct(createProductDTO: CreateProductDTO): Promise<import("./schema/product.schema").Product>;
    updateProduct(id: string, createProductDTO: CreateProductDTO): Promise<import("./schema/product.schema").Product>;
    deleteProduct(id: string): Promise<any>;
}
