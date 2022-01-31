import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Maintenance } from './maintanance.entity';
import { User } from './user.entity';
/**This bcrypt is used to hash the password */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');

/**
 * This is login entity
 */
@Entity()
export class Login extends Maintenance {
  /**This is primary generated column */
  @PrimaryGeneratedColumn()
  id: number;

  /**username column */
  @Column({ unique: true })
  @ApiProperty()
  username: string;

  /**password column */
  @Column()
  @ApiProperty()
  password: string;

  /**password column */
  @Column()
  @ApiProperty()
  role: string;

  /**this method is used to hash the password*/
  @BeforeInsert()
  async strongPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  /**one to one  relation */
  @OneToOne(() => User, (user) => user.login)
  @JoinColumn()
  user: User;
}
