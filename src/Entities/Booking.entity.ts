import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Maintenance } from './maintanance.entity';
import { OperationTheaterInfo } from './operationTheaterInfo.entity';
import { staffInfo } from './staff-info.entity';

/**This is BookingOperationTheater entity*/
@Entity()
export class BookingOperationTheater extends Maintenance {
  /**primary generated column */
  @PrimaryGeneratedColumn()
  id: number;

  /**doctor name generated column */
  @Column()
  @ApiProperty()
  doctoremail: string;

  /**optname generated column */
  @Column()
  @ApiProperty()
  optname: string;

  /**fromDate generated column */
  @Column()
  @ApiProperty()
  fromDate: string;

  /**toDate generated column */
  @Column()
  @ApiProperty()
  toDate: string;

  /**operationName generated column */
  @Column()
  @ApiProperty()
  operationName: string;

  @Column()
  @ApiProperty()
  status: string;

  /**many to one relation */
  @ManyToOne(
    () => OperationTheaterInfo,
    (operationtheaterInfo) => operationtheaterInfo.bookingoperationTheater
  )
  operationtheaterInfo: OperationTheaterInfo;

  /**many to one relation */
  @ManyToOne(() => staffInfo, (staffinfo) => staffinfo.bookingoperationTheater)
  staffinfo: staffInfo;
}
