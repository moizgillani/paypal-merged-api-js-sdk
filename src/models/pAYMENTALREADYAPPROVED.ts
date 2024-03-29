/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PaymentAlreadyApprovedDescriptionEnum,
  paymentAlreadyApprovedDescriptionEnumSchema,
} from './paymentAlreadyApprovedDescriptionEnum';
import {
  PaymentAlreadyApprovedIssueEnum,
  paymentAlreadyApprovedIssueEnumSchema,
} from './paymentAlreadyApprovedIssueEnum';

export interface PAYMENTALREADYAPPROVED {
  issue?: PaymentAlreadyApprovedIssueEnum;
  description?: PaymentAlreadyApprovedDescriptionEnum;
}

export const pAYMENTALREADYAPPROVEDSchema: Schema<PAYMENTALREADYAPPROVED> = object(
  {
    issue: ['issue', optional(paymentAlreadyApprovedIssueEnumSchema)],
    description: [
      'description',
      optional(paymentAlreadyApprovedDescriptionEnumSchema),
    ],
  }
);
