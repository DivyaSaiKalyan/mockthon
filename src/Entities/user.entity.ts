import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Login } from './login.entity';
import { CommonEntity } from './common.entity';

/**
 * This is user entity
 */
@Entity()
export class User extends CommonEntity {
  /**id creation */
  @PrimaryGeneratedColumn()
  id: number;

  /**login creation */
  @OneToOne(() => Login, (login) => login.user, { cascade: true })
  login: Login;
}
