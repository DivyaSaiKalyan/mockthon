import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingOperationTheater } from './../../Entities/Booking.entity';
import { StaffinfoService } from './../staffinfo/staffinfo.service';
import { ConfigureService } from './../configure/configure.service';
import { OperationTheaterInfo } from './../../Entities/operationTheaterInfo.entity';
import { recption } from './../../Common/constant/role.constant';
import { staffInfo } from './../../Entities/staff-info.entity';

/**
 * This service is used to book the operation theater
 */
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingOperationTheater)
    private readonly bookingRepository: Repository<BookingOperationTheater>,
    private readonly staffinfoService: StaffinfoService,
    private readonly configureService: ConfigureService
  ) {}

  /**
   * This method is used to book the operation theater
   */
  async bookingOperationTheater(data: BookingOperationTheater, email: string) {
    const getRecption = await this.staffinfoService.getByEmailAndCategory(
      recption,
      email
    );
    const getDoctor = await this.staffinfoService.getstaffInfoByEmail(
      data.doctoremail
    );
    const getTheater = await this.configureService.getOperationTheaterByName(
      data.optname
    );
    if (!getDoctor || !getTheater || !getRecption) {
      throw new BadRequestException('enter details are incorrect');
    }
    const booking = new BookingOperationTheater();
    let theater = new OperationTheaterInfo();
    let staff = new staffInfo();
    staff = getDoctor;
    theater = getTheater;
    booking.createdBy = getRecption.lastname;
    booking.staffinfo = staff;
    booking.operationtheaterInfo = theater;
    const newData = Object.assign(booking, data);
    return await this.bookingRepository.save(newData);
  }

  /**
   * This method is used to delete the operation theater if already booked
   */
  async deleteBooking(
    optName: string,
    operationName: string,
    createdDate: string
  ) {
    const getBookingInfo = await this.bookingRepository.findOne({
      optname: optName,
      operationName: operationName,
      createdDate: createdDate
    });
    if (!getBookingInfo) {
      throw new NotFoundException('not record found in booking table');
    }
    await this.bookingRepository.delete({
      optname: optName,
      operationName: operationName,
      createdDate: createdDate
    });
    return 'delete success';
  }
}
