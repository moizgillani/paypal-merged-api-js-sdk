/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails7 } from '../models/errorDetails7';
import {
  ForbiddenRequestMessageEnum,
} from '../models/forbiddenRequestMessageEnum';
import { ForbiddenRequestNameEnum } from '../models/forbiddenRequestNameEnum';

/**
 * Creates an instance of OrdersConfirmResponse403Json
 */
interface OrdersConfirmResponse403Json {
  name?: ForbiddenRequestNameEnum;
  message?: ForbiddenRequestMessageEnum;
  issues?: ErrorDetails7[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class OrdersConfirmResponse403JsonError extends ApiError<OrdersConfirmResponse403Json> {}
