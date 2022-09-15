import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { BookModule } from './book/book.module';



@Module({
  imports: [
    AdminModule,
    BookModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'manku@511',
      database: 'library',
      autoLoadEntities: true,
      synchronize: true

    }),
 

    ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}


