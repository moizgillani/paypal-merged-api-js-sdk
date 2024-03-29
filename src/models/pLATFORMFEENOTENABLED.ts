/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CapturesRefund422IssuesItemsAnyof24DescriptionEnum,
  capturesRefund422IssuesItemsAnyof24DescriptionEnumSchema,
} from './capturesRefund422IssuesItemsAnyof24DescriptionEnum';
import {
  CapturesRefund422IssuesItemsAnyof24IssueEnum,
  capturesRefund422IssuesItemsAnyof24IssueEnumSchema,
} from './capturesRefund422IssuesItemsAnyof24IssueEnum';

export interface PLATFORMFEENOTENABLED {
  issue?: CapturesRefund422IssuesItemsAnyof24IssueEnum;
  description?: CapturesRefund422IssuesItemsAnyof24DescriptionEnum;
}

export const pLATFORMFEENOTENABLEDSchema: Schema<PLATFORMFEENOTENABLED> = object(
  {
    issue: [
      'issue',
      optional(capturesRefund422IssuesItemsAnyof24IssueEnumSchema),
    ],
    description: [
      'description',
      optional(capturesRefund422IssuesItemsAnyof24DescriptionEnumSchema),
    ],
  }
);
