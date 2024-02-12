/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MultiCurrencyOrder1DescriptionEnum,
  multiCurrencyOrder1DescriptionEnumSchema,
} from './multiCurrencyOrder1DescriptionEnum';
import {
  MultiCurrencyOrder1IssueEnum,
  multiCurrencyOrder1IssueEnumSchema,
} from './multiCurrencyOrder1IssueEnum';

export interface MultiCurrencyOrder1 {
  issue?: MultiCurrencyOrder1IssueEnum;
  description?: MultiCurrencyOrder1DescriptionEnum;
}

export const multiCurrencyOrder1Schema: Schema<MultiCurrencyOrder1> = object({
  issue: ['issue', optional(multiCurrencyOrder1IssueEnumSchema)],
  description: [
    'description',
    optional(multiCurrencyOrder1DescriptionEnumSchema),
  ],
});
