/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PaymentSourceMismatchDescriptionEnum,
  paymentSourceMismatchDescriptionEnumSchema,
} from './paymentSourceMismatchDescriptionEnum';
import {
  PaymentSourceMismatchIssueEnum,
  paymentSourceMismatchIssueEnumSchema,
} from './paymentSourceMismatchIssueEnum';

export interface PAYMENTSOURCEMISMATCH {
  issue?: PaymentSourceMismatchIssueEnum;
  description?: PaymentSourceMismatchDescriptionEnum;
}

export const pAYMENTSOURCEMISMATCHSchema: Schema<PAYMENTSOURCEMISMATCH> = object(
  {
    issue: ['issue', optional(paymentSourceMismatchIssueEnumSchema)],
    description: [
      'description',
      optional(paymentSourceMismatchDescriptionEnumSchema),
    ],
  }
);
