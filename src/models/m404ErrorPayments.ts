/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ErrorDetails, errorDetailsSchema } from './errorDetails';
import {
  ResourceNotFoundMessageEnum,
  resourceNotFoundMessageEnumSchema,
} from './resourceNotFoundMessageEnum';
import {
  ResourceNotFoundNameEnum,
  resourceNotFoundNameEnumSchema,
} from './resourceNotFoundNameEnum';

/** Error response for 404 */
export interface M404ErrorPayments {
  name?: ResourceNotFoundNameEnum;
  message?: ResourceNotFoundMessageEnum;
  issues?: ErrorDetails[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debugId?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  informationLink?: string;
}

export const m404ErrorPaymentsSchema: Schema<M404ErrorPayments> = object({
  name: ['name', optional(resourceNotFoundNameEnumSchema)],
  message: ['message', optional(resourceNotFoundMessageEnumSchema)],
  issues: ['issues', optional(array(lazy(() => errorDetailsSchema)))],
  debugId: ['debug_id', optional(string())],
  informationLink: ['information_link', optional(string())],
});
