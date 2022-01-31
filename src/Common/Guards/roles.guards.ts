import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { GlobalAccess } from '../Access/global.access';
import { Admin } from '../constant/role.constant';
import { recption, Doctor } from './../constant/role.constant';

/**
 * This is a roles guards file this file is used to protuct the apis
 */
@Injectable()
export class RolesGuards implements CanActivate {
  /**constructor */
  constructor(private readonly reflector: Reflector) {}
  /**This method is used to protuct the apis */
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    /**This constant is used to get the roles */
    const roles = this.reflector.get<string>('roles', context.getHandler());
    console.log(roles, 'reflector roles');

    /**if roles avaliabale return the save */
    if (!roles) {
      return true;
    }
    console.log(roles, GlobalAccess.role);

    /**If role is admin this method is worked */
    if (roles.includes(Admin) && GlobalAccess.role == Admin) {
      return true;
    }
    /**If role is recption this method is worked */
    if (roles.includes(recption) && GlobalAccess.role == recption) {
      return true;
    }
    /**If role is Doctor this method is worked */
    if (roles.includes(Doctor) && GlobalAccess.role == Doctor) {
      return true;
    }
    /**return the output */
    return false;
  }
}
