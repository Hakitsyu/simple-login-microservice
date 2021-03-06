import { UserService } from './user.service';
import { DatabaseModule } from '../../database/database.module';
import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';

@Module({
    imports: [DatabaseModule],
    providers: [
        UserService,
        ...userProviders,
    ],
    exports: [UserService]
})
export class UserModule {}