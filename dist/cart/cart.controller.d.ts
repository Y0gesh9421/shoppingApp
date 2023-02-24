import { CartService } from './cart.service';
import { ItemDTO } from './dto/item.dto';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    addItemToCart(req: any, itemDTO: ItemDTO): Promise<import("./schema/cart.schema").Cart>;
    removeItemFromCart(req: any, { productId }: {
        productId: any;
    }): Promise<any>;
    deleteCart(userId: string): Promise<import("./schema/cart.schema").Cart>;
}
