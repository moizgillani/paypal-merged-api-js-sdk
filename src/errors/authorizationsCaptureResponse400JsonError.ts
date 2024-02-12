/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { BadRequestMessageEnum } from '../models/badRequestMessageEnum';
import { BadRequestNameEnum } from '../models/badRequestNameEnum';
import { ErrorDetails3Payments } from '../models/errorDetails3Payments';

/**
 * Creates an instance of AuthorizationsCaptureResponse400Json
 */
interface AuthorizationsCaptureResponse400Json {
  name?: BadRequestNameEnum;
  message?: BadRequestMessageEnum;
  issues?: ErrorDetails3Payments[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class AuthorizationsCaptureResponse400JsonError extends ApiError<AuthorizationsCaptureResponse400Json> {}