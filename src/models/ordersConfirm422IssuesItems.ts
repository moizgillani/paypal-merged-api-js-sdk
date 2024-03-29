/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  OrderAlreadyCapturedDescriptionEnum,
  orderAlreadyCapturedDescriptionEnumSchema,
} from './orderAlreadyCapturedDescriptionEnum';
import {
  OrderAlreadyCapturedIssueEnum,
  orderAlreadyCapturedIssueEnumSchema,
} from './orderAlreadyCapturedIssueEnum';

export interface OrdersConfirm422IssuesItems {
  issue?: OrderAlreadyCapturedIssueEnum;
  description?: OrderAlreadyCapturedDescriptionEnum;
}

export const ordersConfirm422IssuesItemsSchema: Schema<OrdersConfirm422IssuesItems> = object(
  {
    issue: ['issue', optional(orderAlreadyCapturedIssueEnumSchema)],
    description: [
      'description',
      optional(orderAlreadyCapturedDescriptionEnumSchema),
    ],
  }
);
