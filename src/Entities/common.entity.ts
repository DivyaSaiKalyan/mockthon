import { IsInt, IsString } from 'class-validator';
import { Column } from 'typeorm';
import { Maintenance } from './maintanance.entity';

/**This is common entity all common feilds are avaliabale here */
export class CommonEntity extends Maintenance {
  /**firstname generated column */
  @Column()
  @IsString()
  firstname: string;

  /**lastname generated column */
  @Column()
  @IsString()
  lastname: string;

  /**dateofbirth generated column */
  @Column()
  @IsString()
  dateofbirth: string;

  /**phonenumber generated column */
  @Column()
  @IsString()
  phonenumber: string;

  /**emailid generated column */
  @Column()
  @IsString()
  emailid: string;

  /**addAddressLine1 generated column */
  @Column()
  @IsString()
  addAddressLine1: string;

  /**addAddressLine2 generated column */
  @Column()
  @IsString()
  addAddressLine2: string;

  /**city generated column */
  @Column()
  @IsString()
  city: string;

  /**state generated column */
  @Column()
  @IsString()
  state: string;

  /**country generated column */
  @Column()
  @IsString()
  country: string;

  /**pincode generated column */
  @Column()
  @IsInt()
  pincode: number;
}
