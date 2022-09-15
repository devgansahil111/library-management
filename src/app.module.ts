import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { BookModule } from './book/book.module';
import { EmployeeModule } from './employee/employee.module';



@Module({
  imports: [
    AdminModule,
    BookModule,
      EmployeeModule,
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


