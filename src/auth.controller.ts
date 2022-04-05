import { UserRegisterDto } from './domain/dto/user-register-dto';
import { UserService } from './resources/user/user.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Post('register')
    async register(@Body() user: UserRegisterDto) {
        if (await this.userService.userByEmail(user.email))
            return { error: 'Already has account with this email' }; 

        const { email, password } = await this.userService.register(user);
        return { email, password };
    }
}