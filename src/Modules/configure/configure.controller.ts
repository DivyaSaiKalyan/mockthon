import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { ConfigureService } from './configure.service';
import { ApiTags } from '@nestjs/swagger';
import { Cache } from 'cache-manager';
import { StaffCategory } from './../../Entities/staffCategory.entity';

/**
 * This is a helper controller
 */
@ApiTags('StaffCategory && operationTheaterInfo')
@Controller('configure')
export class ConfigureController {
  constructor(private readonly configureService: ConfigureService) {}
  @Inject(CACHE_MANAGER) private cacheManager: Cache;

  /**
   * This method is used to get the all StaffCategories
   */
  @Get('StaffCategory')
  async getStaffCategory() {
    const value = await this.cacheManager.get<StaffCategory>('StaffCategory');
    if (value) {
      return {
        dataFrom: 'From Cache',
        StaffCategoryInfo: value
      };
    }
    await this.cacheManager.set(
      'StaffCategory',
      this.configureService.getStaffCategory(),
      { ttl: 1000 }
    );
    return {
      dataFrom: 'My Fake Database',
      userInfo: await this.configureService.getStaffCategory()
    };
  }

  /**
   * This method is used to get the all operationTheaterInfo
   */
  @Get('operationTheaterInfo')
  async getoperationTheaterInfo() {
    await this.cacheManager.set(
      'key',
      this.configureService.getoperationTheaterInfo(),
      { ttl: 1000 }
    );
    return {
      dataFrom: 'My Fake Database',
      userInfo: await this.configureService.getStaffCategory()
    };
  }
}
