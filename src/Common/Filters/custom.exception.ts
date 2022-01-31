import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * This is a custom forbidden Enception
 */
export class ForbiddenException extends HttpException {
  /**This is a  Forbidden constructor*/
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

/**
 * This is a custom Unauthorized Enception
 */
export class Unauthorized extends HttpException {
  /**This is a  Unauthorized constructor*/
  constructor() {
    super('unauthorized', HttpStatus.UNAUTHORIZED);
  }
}

/**
 * This is a custom NotFound Enception
 */
export class NotFound extends HttpException {
  /**This is a  NotFound constructor*/
  constructor() {
    super('not found', HttpStatus.NOT_FOUND);
  }
}

/**
 * This is a custom BadRequest Enception
 */
export class BadRequest extends HttpException {
  /**This is a  BadRequest constructor*/
  constructor() {
    super('bad Request', HttpStatus.BAD_REQUEST);
  }
}
