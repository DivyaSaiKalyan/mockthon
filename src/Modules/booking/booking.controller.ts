import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingOperationTheater } from './../../Entities/Booking.entity';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/Common/Decorators/roles.decorator';
import { Doctor, recption } from './../../Common/constant/role.constant';
import { RolesGuards } from './../../Common/Guards/roles.guards';

/**This is a bookig related controller all apis coding ia avaliable here */
@ApiTags('booking')
@UseGuards(RolesGuards)
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  /**post method */

  @Post('bookingOperationTheater/:email')
  @Roles([recption, Doctor])
  async bookingOperationTheater(
    @Body() data: BookingOperationTheater,
    @Param('email') email: string
  ) {
    return await this.bookingService.bookingOperationTheater(data, email);
  }

  /**Delete method */
  @Delete('deleteBooking/:optName/:operationName/:createdDate')
  async deleteBooking(
    @Param('optName') optName: string,
    @Param('operationName') operationName: string,
    @Param('createdDate') createdDate: string
  ) {
    return await this.bookingService.deleteBooking(
      optName,
      operationName,
      createdDate
    );
  }
}
