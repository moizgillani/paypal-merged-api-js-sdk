/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails18 } from '../models/errorDetails18';
import {
  ResourceNotFoundMessageEnum,
} from '../models/resourceNotFoundMessageEnum';
import { ResourceNotFoundNameEnum } from '../models/resourceNotFoundNameEnum';

/**
 * Creates an instance of OrdersTrackersPatchResponse404Json
 */
interface OrdersTrackersPatchResponse404Json {
  name?: ResourceNotFoundNameEnum;
  message?: ResourceNotFoundMessageEnum;
  issues?: ErrorDetails18[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class OrdersTrackersPatchResponse404JsonError extends ApiError<OrdersTrackersPatchResponse404Json> {}
