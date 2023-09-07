import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gabriel:admin1234@cluster0.dycxonp.mongodb.net/',
    ),
    ItemsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, UsersController, AuthController],
  providers: [UsersService, AppService, AuthService],
})
export class AppModule {}
