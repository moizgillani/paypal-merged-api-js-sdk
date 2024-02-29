/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Error409MessageEnum } from '../models/error409MessageEnum';
import { Error409NameEnum } from '../models/error409NameEnum';
import { ErrorDetails14Payments } from '../models/errorDetails14Payments';

/**
 * Creates an instance of AuthorizationsVoidResponse409Json
 */
interface AuthorizationsVoidResponse409Json {
  name?: Error409NameEnum;
  message?: Error409MessageEnum;
  issues?: ErrorDetails14Payments[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class AuthorizationsVoidResponse409JsonError extends ApiError<AuthorizationsVoidResponse409Json> {}
