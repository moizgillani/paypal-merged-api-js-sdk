/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidPreviousTransactionReference2IssueEnum,
  invalidPreviousTransactionReference2IssueEnumSchema,
} from './invalidPreviousTransactionReference2IssueEnum';
import {
  InvalidPreviousTxReferenceEnum,
  invalidPreviousTxReferenceEnumSchema,
} from './invalidPreviousTxReferenceEnum';

export interface INVALIDPREVTRANSREFERRORRESPONSE {
  issue?: InvalidPreviousTransactionReference2IssueEnum;
  description?: InvalidPreviousTxReferenceEnum;
}

export const iNVALIDPREVTRANSREFERRORRESPONSESchema: Schema<INVALIDPREVTRANSREFERRORRESPONSE> = object(
  {
    issue: [
      'issue',
      optional(invalidPreviousTransactionReference2IssueEnumSchema),
    ],
    description: [
      'description',
      optional(invalidPreviousTxReferenceEnumSchema),
    ],
  }
);
