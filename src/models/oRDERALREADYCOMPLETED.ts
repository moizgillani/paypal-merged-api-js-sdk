/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  OrderAlreadyCompletedDescriptionEnum,
  orderAlreadyCompletedDescriptionEnumSchema,
} from './orderAlreadyCompletedDescriptionEnum';
import {
  OrderAlreadyCompletedIssueEnum,
  orderAlreadyCompletedIssueEnumSchema,
} from './orderAlreadyCompletedIssueEnum';

export interface ORDERALREADYCOMPLETED {
  issue?: OrderAlreadyCompletedIssueEnum;
  description?: OrderAlreadyCompletedDescriptionEnum;
}

export const oRDERALREADYCOMPLETEDSchema: Schema<ORDERALREADYCOMPLETED> = object(
  {
    issue: ['issue', optional(orderAlreadyCompletedIssueEnumSchema)],
    description: [
      'description',
      optional(orderAlreadyCompletedDescriptionEnumSchema),
    ],
  }
);
