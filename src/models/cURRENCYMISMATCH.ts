/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  CapturesRefund422IssuesItemsAnyof4IssueEnum,
  capturesRefund422IssuesItemsAnyof4IssueEnumSchema,
} from './capturesRefund422IssuesItemsAnyof4IssueEnum';

export interface CURRENCYMISMATCH {
  issue?: CapturesRefund422IssuesItemsAnyof4IssueEnum;
  description?: string;
}

export const cURRENCYMISMATCHSchema: Schema<CURRENCYMISMATCH> = object({
  issue: ['issue', optional(capturesRefund422IssuesItemsAnyof4IssueEnumSchema)],
  description: ['description', optional(string())],
});