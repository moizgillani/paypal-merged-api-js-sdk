/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails9 } from '../models/errorDetails9';
import {
  ForbiddenRequestMessageEnum,
} from '../models/forbiddenRequestMessageEnum';
import { ForbiddenRequestNameEnum } from '../models/forbiddenRequestNameEnum';

/**
 * Creates an instance of OrdersAuthorizeResponse403Json
 */
interface OrdersAuthorizeResponse403Json {
  name?: ForbiddenRequestNameEnum;
  message?: ForbiddenRequestMessageEnum;
  issues?: ErrorDetails9[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class OrdersAuthorizeResponse403JsonError extends ApiError<OrdersAuthorizeResponse403Json> {}
