import { Controller, Request, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { Roles } from './decorator/roles.decorator';
import { Role } from './enums/roles.enum';
import { JWTAuthGuard } from './guard/jwt.guard';
import { LocalAuthGuard } from './guard/local.guard';
import { RolesGuard } from './guard/roles.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Post('/register')
  async register(@Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.addUser(createUserDTO);
    return user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JWTAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('/user')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JWTAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('/admin')
  getDashboard(@Request() req) {
    return req.user;
  }
}