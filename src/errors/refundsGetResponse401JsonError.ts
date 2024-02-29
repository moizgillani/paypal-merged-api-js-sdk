/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails2 } from '../models/errorDetails2';
import {
  UnauthorizedRequestMessageEnum,
} from '../models/unauthorizedRequestMessageEnum';
import {
  UnauthorizedRequestNameEnum,
} from '../models/unauthorizedRequestNameEnum';

/**
 * Creates an instance of RefundsGetResponse401Json
 */
interface RefundsGetResponse401Json {
  name?: UnauthorizedRequestNameEnum;
  message?: UnauthorizedRequestMessageEnum;
  issues?: ErrorDetails2[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debug_id?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  information_link?: string;
}

export class RefundsGetResponse401JsonError extends ApiError<RefundsGetResponse401Json> {}
