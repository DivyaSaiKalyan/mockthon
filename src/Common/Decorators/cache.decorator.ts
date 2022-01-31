import { SetMetadata } from '@nestjs/common';

/**This is a custom decorator fro CacheKey */
export const CacheKey = (cacheKeyValue) =>
  SetMetadata('cache-key', cacheKeyValue);
