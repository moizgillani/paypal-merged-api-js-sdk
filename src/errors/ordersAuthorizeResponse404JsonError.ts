/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails4 } from '../models/errorDetails4';
import {
  ResourceNotFoundMessageEnum,
} from '../models/resourceNotFoundMessageEnum';
import { ResourceNotFoundNameEnum } from '../models/resourceNotFoundNameEnum';

/**
 * Creates an instance of OrdersAuthorizeResponse404Json
 */
interface OrdersAuthorizeResponse404Json {
  name?: ResourceNotFoundNameEnum;
  message?: ResourceNotFoundMessageEnum;
  issues?: ErrorDetails4[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class OrdersAuthorizeResponse404JsonError extends ApiError<OrdersAuthorizeResponse404Json> {}
