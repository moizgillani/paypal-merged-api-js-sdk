/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  InvalidArrayMaxItemsDescription2Enum,
  invalidArrayMaxItemsDescription2EnumSchema,
} from './invalidArrayMaxItemsDescription2Enum';

/** The error details. Required for client-side `4XX` errors. */
export interface ErrorDetails1 {
  /** The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. */
  field?: string;
  /** The value of the field that caused the error. */
  value?: string;
  /** The location of the field that caused the error. Value is `body`, `path`, or `query`. */
  location?: string;
  /** The unique, fine-grained application-level error code. */
  issue: string;
  /** The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. */
  description?: InvalidArrayMaxItemsDescription2Enum;
}

export const errorDetails1Schema: Schema<ErrorDetails1> = object({
  field: ['field', optional(string())],
  value: ['value', optional(string())],
  location: ['location', optional(string())],
  issue: ['issue', string()],
  description: [
    'description',
    optional(invalidArrayMaxItemsDescription2EnumSchema),
  ],
});