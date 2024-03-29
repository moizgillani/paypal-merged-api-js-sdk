/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ExceededMaxPaymentAttemptsEnum,
  exceededMaxPaymentAttemptsEnumSchema,
} from './exceededMaxPaymentAttemptsEnum';
import {
  MaxNumberOfPaymentAttemptsExceededIssueEnum,
  maxNumberOfPaymentAttemptsExceededIssueEnumSchema,
} from './maxNumberOfPaymentAttemptsExceededIssueEnum';

export interface MAXNUMBEROFPAYMENTATTEMPTSEXCEEDED {
  issue?: MaxNumberOfPaymentAttemptsExceededIssueEnum;
  description?: ExceededMaxPaymentAttemptsEnum;
}

export const mAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDSchema: Schema<MAXNUMBEROFPAYMENTATTEMPTSEXCEEDED> = object(
  {
    issue: [
      'issue',
      optional(maxNumberOfPaymentAttemptsExceededIssueEnumSchema),
    ],
    description: [
      'description',
      optional(exceededMaxPaymentAttemptsEnumSchema),
    ],
  }
);
