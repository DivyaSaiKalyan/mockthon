import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { staffInfo } from './../../Entities/staff-info.entity';
import { staffInfoDto } from './dto/staff.dto';
import { StaffCategory } from './../../Entities/staffCategory.entity';
import { NotFound } from './../../Common/Filters/custom.exception';

/**This is a staff info service */
@Injectable()
export class StaffinfoService {
  constructor(
    @InjectRepository(staffInfo)
    private readonly staffInfoRepository: Repository<staffInfo>,
    @InjectRepository(StaffCategory)
    private readonly staffCategoryRepository: Repository<StaffCategory>
  ) {}

  /**This is add staff method */
  async addStaff(data: staffInfoDto) {
    const getCategory = await this.staffCategoryRepository.findOne({
      Categoryname: data.Categoryname
    });
    const staffinfo = new staffInfo();
    let staffCategory = new StaffCategory();
    if (!getCategory) {
      throw new NotFound();
    } else {
      staffCategory = getCategory;
      staffinfo.createdBy = data.firstname;
      staffinfo.staffcategory = staffCategory;
      staffinfo.category = data.Categoryname;
      const newData = Object.assign(staffinfo, data);
      return await this.staffInfoRepository.save(newData);
    }
  }

  /**get staff based on category */
  async getStaffBasedOnCategory(category: string) {
    return await this.findBYCategory(category);
  }

  /**get staff info based on email and category name */
  async getByEmailAndCategory(category: string, email: string) {
    const getData = await this.staffInfoRepository.findOne({
      category: category,
      emailid: email
    });
    if (!getData) {
      throw new NotFound();
    }
    return getData;
  }

  /**get staff by email */
  async getstaffInfoByEmail(email: string) {
    const getData = await this.staffInfoRepository.findOne({ emailid: email });
    if (!getData) {
      throw new NotFound();
    }
    return getData;
  }

  /**get staff by category */
  async findBYCategory(category: string) {
    const getCategory = await this.staffInfoRepository.find({
      category: category
    });
    if (!getCategory) {
      throw new NotFound();
    }
    return getCategory;
  }
}
