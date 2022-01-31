import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Login } from './login.entity';

/**
 * This is user entity
 */
@Entity()
export class User {
  /**id creation */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  @IsString()
  /**name creation */
  name: string;

  @Column({ unique: true })
  @ApiProperty()
  @IsString()
  /**phoneNumber creation */
  phoneNumber: string;

  @Column()
  @ApiProperty()
  @IsInt()
  /**age creation */
  age: number;

  @Column()
  @ApiProperty()
  @IsString()
  /**gender creation */
  gender: string;

  /**login creation */
  @OneToOne(() => Login, (login) => login.user, { cascade: true })
  login: Login;
}
