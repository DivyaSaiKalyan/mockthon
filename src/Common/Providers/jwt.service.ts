import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { Login } from './../../Entities/login.entity';

/**
 * This is a jwt service class all jwt related methjod is avaliabale here
 */
@Injectable()
export class jwtServiceClass {
  /**constructor */
  constructor(private readonly jwtservice: JwtService) {}

  /**
   * This is create token method
   * @param user
   * @returns
   */
  async CreateJwtToken(login: Login) {
    const jwt = await this.jwtservice.signAsync({ username: login.username });
    return jwt;
  }

  /**This is verify token method */
  async verifyJwtToken(token: string) {
    const verifyToken = await this.jwtservice.verifyAsync(token);
    return verifyToken;
  }

  /**This is delete token method */
  async deleteToken(response: Response) {
    response.clearCookie('jwt');
    return 'logout success';
  }
}
