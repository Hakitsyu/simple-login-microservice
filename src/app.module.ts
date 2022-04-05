import { AuthController } from './auth.controller';
import { UserModule } from './resources/user/user.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    DatabaseModule,
    UserModule
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}