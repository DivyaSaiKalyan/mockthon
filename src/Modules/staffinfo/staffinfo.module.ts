import { Module } from '@nestjs/common';
import { StaffinfoController } from './staffinfo.controller';
import { StaffinfoService } from './staffinfo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffCategory } from './../../Entities/staffCategory.entity';
import { staffInfo } from './../../Entities/staff-info.entity';

/**staff info module all configurations are avaliable here */
@Module({
  imports: [TypeOrmModule.forFeature([staffInfo, StaffCategory])],

  controllers: [StaffinfoController],
  providers: [StaffinfoService]
})
export class StaffinfoModule {}
