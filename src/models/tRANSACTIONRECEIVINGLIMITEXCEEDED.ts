/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  TransactionReceivingLimitExceededDescriptionEnum,
  transactionReceivingLimitExceededDescriptionEnumSchema,
} from './transactionReceivingLimitExceededDescriptionEnum';
import {
  TransactionReceivingLimitExceededIssueEnum,
  transactionReceivingLimitExceededIssueEnumSchema,
} from './transactionReceivingLimitExceededIssueEnum';

export interface TRANSACTIONRECEIVINGLIMITEXCEEDED {
  issue?: TransactionReceivingLimitExceededIssueEnum;
  description?: TransactionReceivingLimitExceededDescriptionEnum;
}

export const tRANSACTIONRECEIVINGLIMITEXCEEDEDSchema: Schema<TRANSACTIONRECEIVINGLIMITEXCEEDED> = object(
  {
    issue: [
      'issue',
      optional(transactionReceivingLimitExceededIssueEnumSchema),
    ],
    description: [
      'description',
      optional(transactionReceivingLimitExceededDescriptionEnumSchema),
    ],
  }
);
