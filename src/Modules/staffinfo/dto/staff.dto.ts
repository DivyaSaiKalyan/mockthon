import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString } from 'class-validator';

export class staffInfoDto {
  @IsString()
  @ApiProperty()
  firstname: string;

  /**lastname generated column */
  @IsString()
  @ApiProperty()
  lastname: string;

  /**dateofbirth generated column */
  @IsString()
  @ApiProperty()
  dateofbirth: string;

  /**phonenumber generated column */
  @IsString()
  @ApiProperty()
  phonenumber: string;

  /**emailid generated column */
  @IsEmail()
  @ApiProperty()
  emailid: string;

  /**addAddressLine1 generated column */
  @IsString()
  @ApiProperty()
  addAddressLine1: string;

  /**addAddressLine2 generated column */
  @IsString()
  @ApiProperty()
  addAddressLine2: string;

  /**city generated column */
  @IsString()
  @ApiProperty()
  city: string;

  /**state generated column */
  @IsString()
  @ApiProperty()
  state: string;

  /**country generated column */
  @IsString()
  @ApiProperty()
  country: string;

  /**pincode generated column */
  @IsInt()
  @ApiProperty()
  pincode: number;

  @IsString()
  @ApiProperty()
  Categoryname: string;
}
