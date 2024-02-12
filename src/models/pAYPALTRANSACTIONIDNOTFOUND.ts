/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PaypalTransactionIdNotFoundDescriptionEnum,
  paypalTransactionIdNotFoundDescriptionEnumSchema,
} from './paypalTransactionIdNotFoundDescriptionEnum';
import {
  PaypalTransactionIdNotFoundIssueEnum,
  paypalTransactionIdNotFoundIssueEnumSchema,
} from './paypalTransactionIdNotFoundIssueEnum';

export interface PAYPALTRANSACTIONIDNOTFOUND {
  issue?: PaypalTransactionIdNotFoundIssueEnum;
  description?: PaypalTransactionIdNotFoundDescriptionEnum;
}

export const pAYPALTRANSACTIONIDNOTFOUNDSchema: Schema<PAYPALTRANSACTIONIDNOTFOUND> = object(
  {
    issue: ['issue', optional(paypalTransactionIdNotFoundIssueEnumSchema)],
    description: [
      'description',
      optional(paypalTransactionIdNotFoundDescriptionEnumSchema),
    ],
  }
);