/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ErrorDetails, errorDetailsSchema } from './errorDetails';
import {
  UnauthorizedRequestMessageEnum,
  unauthorizedRequestMessageEnumSchema,
} from './unauthorizedRequestMessageEnum';
import {
  UnauthorizedRequestNameEnum,
  unauthorizedRequestNameEnumSchema,
} from './unauthorizedRequestNameEnum';

/** Error response for 401 */
export interface M401ErrorPayments {
  name?: UnauthorizedRequestNameEnum;
  message?: UnauthorizedRequestMessageEnum;
  issues?: ErrorDetails[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debugId?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  informationLink?: string;
}

export const m401ErrorPaymentsSchema: Schema<M401ErrorPayments> = object({
  name: ['name', optional(unauthorizedRequestNameEnumSchema)],
  message: ['message', optional(unauthorizedRequestMessageEnumSchema)],
  issues: ['issues', optional(array(lazy(() => errorDetailsSchema)))],
  debugId: ['debug_id', optional(string())],
  informationLink: ['information_link', optional(string())],
});
