import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfig } from './Config/TypeOrm/typeorm.config';
import { LoggerMiddleware } from './Common/MiddleWare/logger.middleware';
import { UserModule } from './Modules/user/user.module';
import { User } from './Entities/user.entity';
import { Login } from './Entities/login.entity';
import { staffInfo } from './Entities/staff-info.entity';
import { StaffCategory } from './Entities/staffCategory.entity';
import { OperationTheaterInfo } from './Entities/operationTheaterInfo.entity';
import { BookingOperationTheater } from './Entities/Booking.entity';
import { StaffinfoModule } from './Modules/staffinfo/staffinfo.module';
import { ConfigureModule } from './Modules/configure/configure.module';
import { BookingModule } from './Modules/booking/booking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: TypeOrmConfig.host,
      port: TypeOrmConfig.port,
      username: TypeOrmConfig.username,
      password: TypeOrmConfig.password,
      database: TypeOrmConfig.database,
      entities: [
        staffInfo,
        User,
        Login,
        StaffCategory,
        OperationTheaterInfo,
        BookingOperationTheater
      ],
      //autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    ConfigureModule,
    StaffinfoModule,
    BookingModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
