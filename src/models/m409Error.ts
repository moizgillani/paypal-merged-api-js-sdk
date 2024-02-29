/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  Error409MessageEnum,
  error409MessageEnumSchema,
} from './error409MessageEnum';
import { Error409NameEnum, error409NameEnumSchema } from './error409NameEnum';
import { ErrorDetails, errorDetailsSchema } from './errorDetails';

/** Error response for 409 */
export interface M409Error {
  name?: Error409NameEnum;
  message?: Error409MessageEnum;
  issues?: ErrorDetails[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debugId?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  informationLink?: string;
}

export const m409ErrorSchema: Schema<M409Error> = object({
  name: ['name', optional(error409NameEnumSchema)],
  message: ['message', optional(error409MessageEnumSchema)],
  issues: ['issues', optional(array(lazy(() => errorDetailsSchema)))],
  debugId: ['debug_id', optional(string())],
  informationLink: ['information_link', optional(string())],
});
