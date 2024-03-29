/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ActionDoesNotMatchIntentDescriptionEnum,
  actionDoesNotMatchIntentDescriptionEnumSchema,
} from './actionDoesNotMatchIntentDescriptionEnum';
import {
  ActionDoesNotMatchIntentIssueEnum,
  actionDoesNotMatchIntentIssueEnumSchema,
} from './actionDoesNotMatchIntentIssueEnum';

export interface OrdersAuthorize422IssuesItems {
  issue?: ActionDoesNotMatchIntentIssueEnum;
  description?: ActionDoesNotMatchIntentDescriptionEnum;
}

export const ordersAuthorize422IssuesItemsSchema: Schema<OrdersAuthorize422IssuesItems> = object(
  {
    issue: ['issue', optional(actionDoesNotMatchIntentIssueEnumSchema)],
    description: [
      'description',
      optional(actionDoesNotMatchIntentDescriptionEnumSchema),
    ],
  }
);
