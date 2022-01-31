import {
  Body,
  Controller,
  Delete,
  Post,
  Res,
  UseFilters,
  ValidationPipe
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { loginDto } from './dto/login.dto';
import { Response } from 'express';
import { HttpExceptionFilter } from 'src/Common/Filters/exception.filter';
import { userDto } from './dto/user.dto';

/**
 * This is user controller all user related roturs are avaliable here
 */
@ApiTags('User')
@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * This is a create user method
   * @param data is taken from the user
   * @returns save data in database
   */
  @Post('addUser')
  async CreateUser(@Body(ValidationPipe) data: userDto) {
    return await this.userService.CreateUser(data);
  }

  /**
   * This is a login method
   * @param data is taken from the user
   * @param response imported from the express library
   * @returns in credimport { HttpExceptionFilter } from './../../Common/Filters/exception.filter';
intiels are true return success
   */
  @Post('LoginUser')
  async LoginUser(
    @Body() data: loginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return await this.userService.loginUser(data, response);
  }

  /**
   * This method is used to delete the jwt token from the cookie
   * @param response
   * @returns
   */
  @Delete('logoutUser')
  async logoutUser(response: Response): Promise<string> {
    return await this.userService.logoutUser(response);
  }
}
