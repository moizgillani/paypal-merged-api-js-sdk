/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  TransactionRefused1DescriptionEnum,
  transactionRefused1DescriptionEnumSchema,
} from './transactionRefused1DescriptionEnum';
import {
  TransactionRefused1IssueEnum,
  transactionRefused1IssueEnumSchema,
} from './transactionRefused1IssueEnum';

export interface TRANSACTIONREFUSEDERROR {
  issue?: TransactionRefused1IssueEnum;
  description?: TransactionRefused1DescriptionEnum;
}

export const tRANSACTIONREFUSEDERRORSchema: Schema<TRANSACTIONREFUSEDERROR> = object(
  {
    issue: ['issue', optional(transactionRefused1IssueEnumSchema)],
    description: [
      'description',
      optional(transactionRefused1DescriptionEnumSchema),
    ],
  }
);
