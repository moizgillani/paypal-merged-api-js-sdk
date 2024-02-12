/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CapturesRefund422IssuesItemsAnyof20DescriptionEnum,
  capturesRefund422IssuesItemsAnyof20DescriptionEnumSchema,
} from './capturesRefund422IssuesItemsAnyof20DescriptionEnum';
import {
  CapturesRefund422IssuesItemsAnyof20IssueEnum,
  capturesRefund422IssuesItemsAnyof20IssueEnumSchema,
} from './capturesRefund422IssuesItemsAnyof20IssueEnum';

export interface REFUNDNOTPERMITTEDDUETOCHARGEBACK {
  issue?: CapturesRefund422IssuesItemsAnyof20IssueEnum;
  description?: CapturesRefund422IssuesItemsAnyof20DescriptionEnum;
}

export const rEFUNDNOTPERMITTEDDUETOCHARGEBACKSchema: Schema<REFUNDNOTPERMITTEDDUETOCHARGEBACK> = object(
  {
    issue: [
      'issue',
      optional(capturesRefund422IssuesItemsAnyof20IssueEnumSchema),
    ],
    description: [
      'description',
      optional(capturesRefund422IssuesItemsAnyof20DescriptionEnumSchema),
    ],
  }
);