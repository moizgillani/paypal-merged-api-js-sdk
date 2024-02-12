/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  BadRequestMessageEnum,
  badRequestMessageEnumSchema,
} from './badRequestMessageEnum';
import {
  BadRequestNameEnum,
  badRequestNameEnumSchema,
} from './badRequestNameEnum';
import { ErrorDetails1, errorDetails1Schema } from './errorDetails1';

export interface BadRequest {
  name?: BadRequestNameEnum;
  message?: BadRequestMessageEnum;
  issues?: ErrorDetails1[];
  /** The PayPal internal ID. Used for correlation purposes. */
  debugId?: string;
  /** The information link, or URI, that shows detailed information about this error for the developer. */
  informationLink?: string;
}

export const badRequestSchema: Schema<BadRequest> = object({
  name: ['name', optional(badRequestNameEnumSchema)],
  message: ['message', optional(badRequestMessageEnumSchema)],
  issues: ['issues', optional(array(lazy(() => errorDetails1Schema)))],
  debugId: ['debug_id', optional(string())],
  informationLink: ['information_link', optional(string())],
});