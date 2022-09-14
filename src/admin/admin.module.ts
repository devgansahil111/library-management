import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports:[
    (TypeOrmModule.forFeature([Admin])),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: 'library!@#$%',
    signOptions: {
      expiresIn: 36000,
    },
  }),
  ],
  controllers: [AdminController],
  providers: [AdminService]

})
export class AdminModule {}
