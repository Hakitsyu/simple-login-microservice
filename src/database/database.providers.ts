import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) =>
            await mongoose.connect(configService.get<string>('mongoUrl')) 
    }
]