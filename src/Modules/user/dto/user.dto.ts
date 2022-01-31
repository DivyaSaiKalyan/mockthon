import { ApiProperty } from '@nestjs/swagger';
/**
 * This is user Dto
 */
export class userDto {
  /**Name creation */
  @ApiProperty()
  name: string;

  /**Name creation */
  @ApiProperty()
  age: number;

  /**Name creation */
  @ApiProperty()
  gender: string;

  /**Name creation */
  @ApiProperty()
  phoneNumber: string;

  /**Name creation */
  @ApiProperty()
  username: string;

  /**Name creation */
  @ApiProperty()
  password: string;

  /**Name creation */
  @ApiProperty()
  role: string;
}
