import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingOperationTheater } from './../../Entities/Booking.entity';
import { StaffinfoService } from './../staffinfo/staffinfo.service';
import { ConfigureService } from './../configure/configure.service';
import { staffInfo } from './../../Entities/staff-info.entity';
import { StaffCategory } from './../../Entities/staffCategory.entity';
import { OperationTheaterInfo } from './../../Entities/operationTheaterInfo.entity';

/**This module is used to configure the booking */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookingOperationTheater,
      staffInfo,
      StaffCategory,
      OperationTheaterInfo
    ])
  ],

  controllers: [BookingController],
  providers: [BookingService, StaffinfoService, ConfigureService]
})
export class BookingModule {}
