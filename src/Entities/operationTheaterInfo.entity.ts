import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Maintenance } from './maintanance.entity';
import { BookingOperationTheater } from './Booking.entity';

/**this is OperationTheaterInfo entity*/
@Entity()
export class OperationTheaterInfo extends Maintenance {
  /**this is primary generated column */
  @PrimaryGeneratedColumn()
  id: number;

  /**operationTheaterName column */
  @Column()
  operationTheaterName: string;

  /**one to many */
  @OneToMany(
    () => BookingOperationTheater,
    (bookingoperationTheater) => bookingoperationTheater.operationtheaterInfo
  )
  bookingoperationTheater: BookingOperationTheater[];

  /**push data to  bookingoperationTheater*/
  addbookingInfo(bookingoperationTheater: BookingOperationTheater) {
    if (this.bookingoperationTheater == null) {
      this.bookingoperationTheater = new Array<BookingOperationTheater>();
    }
    return this.bookingoperationTheater.push(bookingoperationTheater);
  }
}
