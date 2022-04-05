import { MinLength, MaxLength, IsEmail } from 'class-validator';

export class UserRegisterDto {
    @IsEmail()
    email: string;

    @MinLength(8)
    @MaxLength(30)
    password: string;
}