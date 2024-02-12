/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AmountMismatch1DescriptionEnum,
  amountMismatch1DescriptionEnumSchema,
} from './amountMismatch1DescriptionEnum';
import {
  AmountMismatch1IssueEnum,
  amountMismatch1IssueEnumSchema,
} from './amountMismatch1IssueEnum';

export interface AmountMismatch1 {
  issue?: AmountMismatch1IssueEnum;
  description?: AmountMismatch1DescriptionEnum;
}

export const amountMismatch1Schema: Schema<AmountMismatch1> = object({
  issue: ['issue', optional(amountMismatch1IssueEnumSchema)],
  description: ['description', optional(amountMismatch1DescriptionEnumSchema)],
});