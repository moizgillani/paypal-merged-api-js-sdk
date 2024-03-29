/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayeeBlockedTransaction2DescriptionEnum,
  payeeBlockedTransaction2DescriptionEnumSchema,
} from './payeeBlockedTransaction2DescriptionEnum';
import {
  PayeeBlockedTransaction2IssueEnum,
  payeeBlockedTransaction2IssueEnumSchema,
} from './payeeBlockedTransaction2IssueEnum';

export interface PAYEEBLOCKEDTRANSACTIONERRORRESPONSE {
  issue?: PayeeBlockedTransaction2IssueEnum;
  description?: PayeeBlockedTransaction2DescriptionEnum;
}

export const pAYEEBLOCKEDTRANSACTIONERRORRESPONSESchema: Schema<PAYEEBLOCKEDTRANSACTIONERRORRESPONSE> = object(
  {
    issue: ['issue', optional(payeeBlockedTransaction2IssueEnumSchema)],
    description: [
      'description',
      optional(payeeBlockedTransaction2DescriptionEnumSchema),
    ],
  }
);
