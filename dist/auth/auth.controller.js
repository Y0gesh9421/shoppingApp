"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const createUser_dto_1 = require("../user/dto/createUser.dto");
const user_service_1 = require("../user/user.service");
const auth_service_1 = require("./auth.service");
const roles_decorator_1 = require("./decorator/roles.decorator");
const roles_enum_1 = require("./enums/roles.enum");
const jwt_guard_1 = require("./guard/jwt.guard");
const local_guard_1 = require("./guard/local.guard");
const roles_guard_1 = require("./guard/roles.guard");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async register(createUserDTO) {
        const user = await this.userService.addUser(createUserDTO);
        return user;
    }
    async login(req) {
        return this.authService.login(req.user);
    }
    getProfile(req) {
        return req.user;
    }
    getDashboard(req) {
        return req.user;
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(local_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.User),
    (0, common_1.Get)('/user'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    (0, common_1.Get)('/admin'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getDashboard", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map