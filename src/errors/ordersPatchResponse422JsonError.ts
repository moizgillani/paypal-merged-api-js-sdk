/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails6 } from '../models/errorDetails6';
import {
  UnprocessableRequestmessageEnum,
} from '../models/unprocessableRequestmessageEnum';
import {
  UnprocessableRequestNameEnum,
} from '../models/unprocessableRequestNameEnum';

/**
 * Creates an instance of OrdersPatchResponse422Json
 */
interface OrdersPatchResponse422Json {
  name?: UnprocessableRequestNameEnum;
  message?: UnprocessableRequestmessageEnum;
  issues?: ErrorDetails6[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class OrdersPatchResponse422JsonError extends ApiError<OrdersPatchResponse422Json> {}
