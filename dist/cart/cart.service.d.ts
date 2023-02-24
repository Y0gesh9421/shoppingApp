import { Model } from 'mongoose';
import { ItemDTO } from './dto/item.dto';
import { Cart, CartDocument } from './schema/cart.schema';
export declare class CartService {
    private readonly cartModel;
    constructor(cartModel: Model<CartDocument>);
    createCart(userId: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<Cart>;
    getCart(userId: string): Promise<CartDocument>;
    deleteCart(userId: string): Promise<Cart>;
    private recalculateCart;
    addItemToCart(userId: string, itemDTO: ItemDTO): Promise<Cart>;
    removeItemFromCart(userId: string, productId: string): Promise<any>;
}
