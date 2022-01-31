import { CacheModule, Module } from '@nestjs/common';
import { ConfigureService } from './configure.service';
import { ConfigureController } from './configure.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationTheaterInfo } from './../../Entities/operationTheaterInfo.entity';
import { StaffCategory } from './../../Entities/staffCategory.entity';

/**Configure module */
@Module({
  imports: [
    TypeOrmModule.forFeature([StaffCategory, OperationTheaterInfo]),
    CacheModule.register()
  ],

  providers: [ConfigureService],
  controllers: [ConfigureController]
})
export class ConfigureModule {}
