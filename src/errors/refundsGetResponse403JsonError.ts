/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails1Payments } from '../models/errorDetails1Payments';
import {
  ForbiddenRequestMessageEnum,
} from '../models/forbiddenRequestMessageEnum';
import { ForbiddenRequestNameEnum } from '../models/forbiddenRequestNameEnum';

/**
 * Creates an instance of RefundsGetResponse403Json
 */
interface RefundsGetResponse403Json {
  name?: ForbiddenRequestNameEnum;
  message?: ForbiddenRequestMessageEnum;
  issues?: ErrorDetails1Payments[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class RefundsGetResponse403JsonError extends ApiError<RefundsGetResponse403Json> {}
