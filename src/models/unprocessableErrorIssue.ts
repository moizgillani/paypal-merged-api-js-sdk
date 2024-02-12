/**
 * Paypal Merged APILib
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

export interface UnprocessableErrorIssue {
  issue?: AmountMismatchIssueEnum;
  description?: AmountMismatchDescriptionEnum;
}

export const unprocessableErrorIssueSchema: Schema<UnprocessableErrorIssue> = object(
  {
    issue: ['issue', optional(amountMismatchIssueEnumSchema)],
    description: ['description', optional(amountMismatchDescriptionEnumSchema)],
  }
);
