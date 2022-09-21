import { Module, forwardRef } from '@nestjs/common';
import { JwtModule} from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './services/auth.service';

// import { JwtAuthGuard } from './guards/jwt-guard';
import { JwtStrategy } from './guards/jwt-strategy';
import { UserModule } from 'src/user/user.module';
import { RolesGuard } from './guards/roles.guard';
import { JwtAuthGuard } from './guards/jwt-guard';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            // imports: [ConfigModule],
            // inject: [ConfigService],
            // useFactory: async (configService: ConfigService) => ({
            //     secret: configService.get('JWT_SECRET'),
            //     signOptions: {expiresIn: '10000s'}
            // })
                secret: "library!@#$%",
                signOptions: {expiresIn: '10000s'}
        })
    ],
    providers: [AuthService,   RolesGuard, JwtAuthGuard, JwtStrategy ],
    exports: [AuthService]
})
export class AuthModule { }