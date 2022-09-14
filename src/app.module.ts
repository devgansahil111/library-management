import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';


@Module({
  imports: [AdminModule, StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}


