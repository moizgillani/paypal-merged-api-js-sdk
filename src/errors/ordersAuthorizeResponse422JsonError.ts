/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails11 } from '../models/errorDetails11';
import {
  UnprocessableRequestmessageEnum,
} from '../models/unprocessableRequestmessageEnum';
import {
  UnprocessableRequestNameEnum,
} from '../models/unprocessableRequestNameEnum';

/**
 * Creates an instance of OrdersAuthorizeResponse422Json
 */
interface OrdersAuthorizeResponse422Json {
  name?: UnprocessableRequestNameEnum;
  message?: UnprocessableRequestmessageEnum;
  issues?: ErrorDetails11[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class OrdersAuthorizeResponse422JsonError extends ApiError<OrdersAuthorizeResponse422Json> {}
