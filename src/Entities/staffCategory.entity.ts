import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { staffInfo } from './staff-info.entity';
import { Maintenance } from './maintanance.entity';

/**This is StaffCategory entity */
@Entity()
export class StaffCategory extends Maintenance {
  /**primary generated column */
  @PrimaryGeneratedColumn()
  id: number;
  /**Categoryname column */
  @Column()
  Categoryname: string;

  /**one to one relation */
  @OneToMany(() => staffInfo, (staffinfo) => staffinfo.staffcategory)
  staffinfo: staffInfo[];

  /**This method is used to push the data */
  addstaffinfo(staffinfo: staffInfo) {
    if (this.staffinfo == null) {
      this.staffinfo = new Array<staffInfo>();
    }
    return this.staffinfo.push(staffinfo);
  }
}
