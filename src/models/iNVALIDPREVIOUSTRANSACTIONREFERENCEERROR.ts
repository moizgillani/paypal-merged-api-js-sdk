/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidPreviousTransactionReference1IssueEnum,
  invalidPreviousTransactionReference1IssueEnumSchema,
} from './invalidPreviousTransactionReference1IssueEnum';
import {
  InvalidPreviousTransactionReferenceError1Enum,
  invalidPreviousTransactionReferenceError1EnumSchema,
} from './invalidPreviousTransactionReferenceError1Enum';

export interface INVALIDPREVIOUSTRANSACTIONREFERENCEERROR {
  issue?: InvalidPreviousTransactionReference1IssueEnum;
  description?: InvalidPreviousTransactionReferenceError1Enum;
}

export const iNVALIDPREVIOUSTRANSACTIONREFERENCEERRORSchema: Schema<INVALIDPREVIOUSTRANSACTIONREFERENCEERROR> = object(
  {
    issue: [
      'issue',
      optional(invalidPreviousTransactionReference1IssueEnumSchema),
    ],
    description: [
      'description',
      optional(invalidPreviousTransactionReferenceError1EnumSchema),
    ],
  }
);
