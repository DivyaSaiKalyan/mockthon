import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { StaffCategory } from './staffCategory.entity';
import { BookingOperationTheater } from './Booking.entity';

/**
 * This is staffInfo entity
 */
@Entity()
export class staffInfo extends CommonEntity {
  /**id primari generated column */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  /**one to one relation */
  @ManyToOne(() => StaffCategory, (staffcategory) => staffcategory.staffinfo)
  @JoinColumn()
  staffcategory: StaffCategory;

  /**one to many relation */
  @OneToMany(
    () => BookingOperationTheater,
    (bookingoperationTheater) => bookingoperationTheater.staffinfo
  )
  bookingoperationTheater: BookingOperationTheater[];

  /**This method is used to push the data to  bookingoperationTheater */
  addbookingInfo(bookingoperationTheater: BookingOperationTheater) {
    if (this.bookingoperationTheater == null) {
      this.bookingoperationTheater = new Array<BookingOperationTheater>();
    }
    return this.bookingoperationTheater.push(bookingoperationTheater);
  }
}
