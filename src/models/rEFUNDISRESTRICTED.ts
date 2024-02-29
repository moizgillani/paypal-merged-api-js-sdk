/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CapturesRefund422IssuesItemsAnyof23DescriptionEnum,
  capturesRefund422IssuesItemsAnyof23DescriptionEnumSchema,
} from './capturesRefund422IssuesItemsAnyof23DescriptionEnum';
import {
  CapturesRefund422IssuesItemsAnyof23IssueEnum,
  capturesRefund422IssuesItemsAnyof23IssueEnumSchema,
} from './capturesRefund422IssuesItemsAnyof23IssueEnum';

export interface REFUNDISRESTRICTED {
  issue?: CapturesRefund422IssuesItemsAnyof23IssueEnum;
  description?: CapturesRefund422IssuesItemsAnyof23DescriptionEnum;
}

export const rEFUNDISRESTRICTEDSchema: Schema<REFUNDISRESTRICTED> = object({
  issue: [
    'issue',
    optional(capturesRefund422IssuesItemsAnyof23IssueEnumSchema),
  ],
  description: [
    'description',
    optional(capturesRefund422IssuesItemsAnyof23DescriptionEnumSchema),
  ],
});
