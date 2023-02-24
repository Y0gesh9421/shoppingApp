import { CreateUserDTO } from 'src/user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    register(createUserDTO: CreateUserDTO): Promise<import("../user/schema/user.schema").User>;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    getDashboard(req: any): any;
}
