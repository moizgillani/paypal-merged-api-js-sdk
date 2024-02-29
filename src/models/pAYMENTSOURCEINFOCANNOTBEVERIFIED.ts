/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PaymentSourceInfoCannotBeVerifiedDescriptionEnum,
  paymentSourceInfoCannotBeVerifiedDescriptionEnumSchema,
} from './paymentSourceInfoCannotBeVerifiedDescriptionEnum';
import {
  PaymentSourceInfoCannotBeVerifiedIssueEnum,
  paymentSourceInfoCannotBeVerifiedIssueEnumSchema,
} from './paymentSourceInfoCannotBeVerifiedIssueEnum';

export interface PAYMENTSOURCEINFOCANNOTBEVERIFIED {
  issue?: PaymentSourceInfoCannotBeVerifiedIssueEnum;
  description?: PaymentSourceInfoCannotBeVerifiedDescriptionEnum;
}

export const pAYMENTSOURCEINFOCANNOTBEVERIFIEDSchema: Schema<PAYMENTSOURCEINFOCANNOTBEVERIFIED> = object(
  {
    issue: [
      'issue',
      optional(paymentSourceInfoCannotBeVerifiedIssueEnumSchema),
    ],
    description: [
      'description',
      optional(paymentSourceInfoCannotBeVerifiedDescriptionEnumSchema),
    ],
  }
);
