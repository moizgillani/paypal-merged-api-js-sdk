/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  ConsentNeededDescription2Enum,
  consentNeededDescription2EnumSchema,
} from './consentNeededDescription2Enum';

/** The error details. Required for client-side `4XX` errors. */
export interface ErrorDetails12 {
  /** The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. */
  field?: string;
  /** The value of the field that caused the error. */
  value?: string;
  /** The location of the field that caused the error. Value is `body`, `path`, or `query`. */
  location?: string;
  /** The unique, fine-grained application-level error code. */
  issue: string;
  /** The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. */
  description?: ConsentNeededDescription2Enum;
}

export const errorDetails12Schema: Schema<ErrorDetails12> = object({
  field: ['field', optional(string())],
  value: ['value', optional(string())],
  location: ['location', optional(string())],
  issue: ['issue', string()],
  description: ['description', optional(consentNeededDescription2EnumSchema)],
});
