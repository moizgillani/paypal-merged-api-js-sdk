/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  OrderNotApprovedDescriptionEnum,
  orderNotApprovedDescriptionEnumSchema,
} from './orderNotApprovedDescriptionEnum';
import {
  OrderNotApprovedIssueEnum,
  orderNotApprovedIssueEnumSchema,
} from './orderNotApprovedIssueEnum';

export interface ORDERNOTAPPROVED {
  issue?: OrderNotApprovedIssueEnum;
  description?: OrderNotApprovedDescriptionEnum;
}

export const oRDERNOTAPPROVEDSchema: Schema<ORDERNOTAPPROVED> = object({
  issue: ['issue', optional(orderNotApprovedIssueEnumSchema)],
  description: ['description', optional(orderNotApprovedDescriptionEnumSchema)],
});