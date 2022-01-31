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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @ApiProperty()
  username: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column()
  @ApiProperty()
  role: string;

  @BeforeInsert()
  async strongPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToOne(() => User, (user) => user.login)
  @JoinColumn()
  user: User;
}
