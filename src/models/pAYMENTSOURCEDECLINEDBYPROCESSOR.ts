/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PaymentSourceDeclinedByProcessorDescriptionEnum,
  paymentSourceDeclinedByProcessorDescriptionEnumSchema,
} from './paymentSourceDeclinedByProcessorDescriptionEnum';
import {
  PaymentSourceDeclinedByProcessorIssueEnum,
  paymentSourceDeclinedByProcessorIssueEnumSchema,
} from './paymentSourceDeclinedByProcessorIssueEnum';

export interface PAYMENTSOURCEDECLINEDBYPROCESSOR {
  issue?: PaymentSourceDeclinedByProcessorIssueEnum;
  description?: PaymentSourceDeclinedByProcessorDescriptionEnum;
}

export const pAYMENTSOURCEDECLINEDBYPROCESSORSchema: Schema<PAYMENTSOURCEDECLINEDBYPROCESSOR> = object(
  {
    issue: ['issue', optional(paymentSourceDeclinedByProcessorIssueEnumSchema)],
    description: [
      'description',
      optional(paymentSourceDeclinedByProcessorDescriptionEnumSchema),
    ],
  }
);
