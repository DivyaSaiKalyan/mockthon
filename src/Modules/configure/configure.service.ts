import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaffCategory } from './../../Entities/staffCategory.entity';
import { OperationTheaterInfo } from './../../Entities/operationTheaterInfo.entity';

/**
 * This is a helper service class all helper related business logics are avaliable here
 */
@Injectable()
export class ConfigureService {
  constructor(
    @InjectRepository(StaffCategory)
    private readonly staffCategoryRepository: Repository<StaffCategory>,
    @InjectRepository(OperationTheaterInfo)
    private readonly operationTheaterInfoRepository: Repository<OperationTheaterInfo>
  ) {}

  /**
   * This method is to fetch all categories
   * @returns
   */
  async getStaffCategory() {
    return await this.staffCategoryRepository.find();
  }

  /**
   * This method is to fetch TheaterInfo
   * @returns
   */
  async getoperationTheaterInfo() {
    return await this.operationTheaterInfoRepository.find();
  }

  /**
   * get data by theater name
   * @param operationTheaterName
   * @returns
   */
  async getOperationTheaterByName(operationTheaterName: string) {
    const getTheater = await this.operationTheaterInfoRepository.findOne({
      operationTheaterName: operationTheaterName
    });
    if (!getTheater) {
      throw new BadRequestException('enter theater name is not found');
    }
    return getTheater;
  }
}
