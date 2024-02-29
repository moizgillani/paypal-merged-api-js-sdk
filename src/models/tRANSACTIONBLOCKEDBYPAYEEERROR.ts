/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  TransactionBlockedByPayee1DescriptionEnum,
  transactionBlockedByPayee1DescriptionEnumSchema,
} from './transactionBlockedByPayee1DescriptionEnum';
import {
  TransactionBlockedByPayee1IssueEnum,
  transactionBlockedByPayee1IssueEnumSchema,
} from './transactionBlockedByPayee1IssueEnum';

export interface TRANSACTIONBLOCKEDBYPAYEEERROR {
  issue?: TransactionBlockedByPayee1IssueEnum;
  description?: TransactionBlockedByPayee1DescriptionEnum;
}

export const tRANSACTIONBLOCKEDBYPAYEEERRORSchema: Schema<TRANSACTIONBLOCKEDBYPAYEEERROR> = object(
  {
    issue: ['issue', optional(transactionBlockedByPayee1IssueEnumSchema)],
    description: [
      'description',
      optional(transactionBlockedByPayee1DescriptionEnumSchema),
    ],
  }
);
