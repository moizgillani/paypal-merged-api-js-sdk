/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PaymentSourceMismatch1DescriptionEnum,
  paymentSourceMismatch1DescriptionEnumSchema,
} from './paymentSourceMismatch1DescriptionEnum';
import {
  PaymentSourceMismatch1IssueEnum,
  paymentSourceMismatch1IssueEnumSchema,
} from './paymentSourceMismatch1IssueEnum';

export interface PAYMENTSOURCEMISMATCHERROR {
  issue?: PaymentSourceMismatch1IssueEnum;
  description?: PaymentSourceMismatch1DescriptionEnum;
}

export const pAYMENTSOURCEMISMATCHERRORSchema: Schema<PAYMENTSOURCEMISMATCHERROR> = object(
  {
    issue: ['issue', optional(paymentSourceMismatch1IssueEnumSchema)],
    description: [
      'description',
      optional(paymentSourceMismatch1DescriptionEnumSchema),
    ],
  }
);
