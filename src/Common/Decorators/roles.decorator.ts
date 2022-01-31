import { SetMetadata } from '@nestjs/common';

/**This is a custom decorator fro roles */
export const Roles = (role) => SetMetadata('roles', role);
