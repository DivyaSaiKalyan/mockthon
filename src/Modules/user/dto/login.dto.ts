import { ApiProperty } from '@nestjs/swagger';
/**
 * This is login dto
 */
export class loginDto {
  /**username creation */
  @ApiProperty()
  username: string;

  /**username creation */
  @ApiProperty()
  password: string;
}
