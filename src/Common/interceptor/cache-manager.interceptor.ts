import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import * as cacheManager from 'cache-manager';
import { Reflector } from '@nestjs/core';

/**
 * This is a chche manager interceptor class
 */
@Injectable()
export class CacheManagerInterceptor implements NestInterceptor {
  /**This is used to stote the cache value */
  manager = cacheManager.caching({ store: 'memory', max: 100, ttl: 10 });
  /**this is constructor */
  constructor(private reflector: Reflector) {}

  /**async interceptor method */
  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<any>> {
    const key = this.reflector.get('cache-key', context.getHandler());

    /**This is cached constant */
    const cached: any = await this.manager.get(key);

    /**If cache is there retun the save */
    if (cached) {
      return cached;
    }
    /**final response */
    return next.handle().pipe(
      tap((response) => {
        this.manager.set(key, response);
      })
    );
  }
}
