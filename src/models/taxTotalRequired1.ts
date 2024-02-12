/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  TaxTotalRequired1DescriptionEnum,
  taxTotalRequired1DescriptionEnumSchema,
} from './taxTotalRequired1DescriptionEnum';
import {
  TaxTotalRequired1IssueEnum,
  taxTotalRequired1IssueEnumSchema,
} from './taxTotalRequired1IssueEnum';

export interface TaxTotalRequired1 {
  issue?: TaxTotalRequired1IssueEnum;
  description?: TaxTotalRequired1DescriptionEnum;
}

export const taxTotalRequired1Schema: Schema<TaxTotalRequired1> = object({
  issue: ['issue', optional(taxTotalRequired1IssueEnumSchema)],
  description: [
    'description',
    optional(taxTotalRequired1DescriptionEnumSchema),
  ],
});
