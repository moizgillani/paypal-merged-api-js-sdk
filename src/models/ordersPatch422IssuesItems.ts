/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AmountMismatchDescriptionEnum,
  amountMismatchDescriptionEnumSchema,
} from './amountMismatchDescriptionEnum';
import {
  AmountMismatchIssueEnum,
  amountMismatchIssueEnumSchema,
} from './amountMismatchIssueEnum';

export interface OrdersPatch422IssuesItems {
  issue?: AmountMismatchIssueEnum;
  description?: AmountMismatchDescriptionEnum;
}

export const ordersPatch422IssuesItemsSchema: Schema<OrdersPatch422IssuesItems> = object(
  {
    issue: ['issue', optional(amountMismatchIssueEnumSchema)],
    description: ['description', optional(amountMismatchDescriptionEnumSchema)],
  }
);
