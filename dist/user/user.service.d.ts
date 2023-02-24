import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/createUser.dto';
import { User, UserDocument } from './schema/user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    addUser(createUserDTO: CreateUserDTO): Promise<User>;
    findUser(username: string): Promise<User | undefined>;
}
