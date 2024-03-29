/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  OrderCompletionInProgressDescriptionEnum,
  orderCompletionInProgressDescriptionEnumSchema,
} from './orderCompletionInProgressDescriptionEnum';
import {
  OrderCompletionInProgressIssueEnum,
  orderCompletionInProgressIssueEnumSchema,
} from './orderCompletionInProgressIssueEnum';

export interface ORDERCOMPLETIONINPROGRESS {
  issue?: OrderCompletionInProgressIssueEnum;
  description?: OrderCompletionInProgressDescriptionEnum;
}

export const oRDERCOMPLETIONINPROGRESSSchema: Schema<ORDERCOMPLETIONINPROGRESS> = object(
  {
    issue: ['issue', optional(orderCompletionInProgressIssueEnumSchema)],
    description: [
      'description',
      optional(orderCompletionInProgressDescriptionEnumSchema),
    ],
  }
);
