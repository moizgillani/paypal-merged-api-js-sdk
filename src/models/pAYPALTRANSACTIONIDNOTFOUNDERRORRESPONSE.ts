/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PaypalTransactionIdNotFound3DescriptionEnum,
  paypalTransactionIdNotFound3DescriptionEnumSchema,
} from './paypalTransactionIdNotFound3DescriptionEnum';
import {
  PaypalTransactionIdNotFound3IssueEnum,
  paypalTransactionIdNotFound3IssueEnumSchema,
} from './paypalTransactionIdNotFound3IssueEnum';

export interface PAYPALTRANSACTIONIDNOTFOUNDERRORRESPONSE {
  issue?: PaypalTransactionIdNotFound3IssueEnum;
  description?: PaypalTransactionIdNotFound3DescriptionEnum;
}

export const pAYPALTRANSACTIONIDNOTFOUNDERRORRESPONSESchema: Schema<PAYPALTRANSACTIONIDNOTFOUNDERRORRESPONSE> = object(
  {
    issue: ['issue', optional(paypalTransactionIdNotFound3IssueEnumSchema)],
    description: [
      'description',
      optional(paypalTransactionIdNotFound3DescriptionEnumSchema),
    ],
  }
);
