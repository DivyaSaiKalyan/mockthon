import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { GlobalAccess } from '../Access/global.access';

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
    /**if roles avaliabale return the save */
    if (!roles) {
      return true;
    }
    /**If role is admin this method is worked */
    if (roles.includes('admin') && GlobalAccess.role === 'admin') {
      return true;
    }
    /**If role is user this method is worked */
    if (roles.includes('user') && GlobalAccess.role === 'user') {
      return true;
    }
    /**return the output */
    return false;
  }
}
