/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidCurrencyCode1DescriptionEnum,
  invalidCurrencyCode1DescriptionEnumSchema,
} from './invalidCurrencyCode1DescriptionEnum';
import {
  InvalidCurrencyCode1IssueEnum,
  invalidCurrencyCode1IssueEnumSchema,
} from './invalidCurrencyCode1IssueEnum';

export interface InvalidCurrencyCode1 {
  issue?: InvalidCurrencyCode1IssueEnum;
  description?: InvalidCurrencyCode1DescriptionEnum;
}

export const invalidCurrencyCode1Schema: Schema<InvalidCurrencyCode1> = object({
  issue: ['issue', optional(invalidCurrencyCode1IssueEnumSchema)],
  description: [
    'description',
    optional(invalidCurrencyCode1DescriptionEnumSchema),
  ],
});
