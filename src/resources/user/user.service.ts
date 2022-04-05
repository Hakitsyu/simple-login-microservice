import { UserRegisterDto } from '../../domain/dto/user-register-dto';
import { User } from './user.interface';
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>
    ) {}

    async register(user: UserRegisterDto): Promise<User> {
        const registeredUser = new this.userModel(user);
        return registeredUser.save();
    }

    async userByEmail(email: string) {
        return await this.userModel.findOne({ email });
    }
}