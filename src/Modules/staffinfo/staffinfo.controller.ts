import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StaffinfoService } from './staffinfo.service';
import { staffInfoDto } from './dto/staff.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from './../../Common/Decorators/roles.decorator';
import { Admin } from 'src/Common/constant/role.constant';

/**This is a staff info controller */
@ApiTags('staff related')
@Controller('staffinfo')
export class StaffinfoController {
  constructor(private readonly staffinfoService: StaffinfoService) {}

  /**post method */
  @Roles(Admin)
  @Post('addStaff')
  async addStaff(@Body() data: staffInfoDto) {
    return await this.staffinfoService.addStaff(data);
  }

  /**get method */
  @Get('getStaffBasedOnCategory/:category')
  async getStaffBasedOnCategory(@Param('category') category: string) {
    return this.staffinfoService.getStaffBasedOnCategory(category);
  }

  /**get method */
  @Get('getByEmailAndCategory/:category/:email')
  async getByEmailAndCategory(
    @Param('category') category: string,
    @Param('email') email: string
  ) {
    return this.staffinfoService.getByEmailAndCategory(category, email);
  }
}
