/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails2Payments } from '../models/errorDetails2Payments';
import {
  ResourceNotFoundMessageEnum,
} from '../models/resourceNotFoundMessageEnum';
import { ResourceNotFoundNameEnum } from '../models/resourceNotFoundNameEnum';

/**
 * Creates an instance of CapturesRefundResponse404Json
 */
interface CapturesRefundResponse404Json {
  name?: ResourceNotFoundNameEnum;
  message?: ResourceNotFoundMessageEnum;
  issues?: ErrorDetails2Payments[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class CapturesRefundResponse404JsonError extends ApiError<CapturesRefundResponse404Json> {}
