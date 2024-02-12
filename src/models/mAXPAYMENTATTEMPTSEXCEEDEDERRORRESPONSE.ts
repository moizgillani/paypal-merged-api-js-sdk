/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ExceededMaxPaymentAttemptsDescEnum,
  exceededMaxPaymentAttemptsDescEnumSchema,
} from './exceededMaxPaymentAttemptsDescEnum';
import {
  MaxNumberOfPaymentAttemptsExceeded2IssueEnum,
  maxNumberOfPaymentAttemptsExceeded2IssueEnumSchema,
} from './maxNumberOfPaymentAttemptsExceeded2IssueEnum';

export interface MAXPAYMENTATTEMPTSEXCEEDEDERRORRESPONSE {
  issue?: MaxNumberOfPaymentAttemptsExceeded2IssueEnum;
  description?: ExceededMaxPaymentAttemptsDescEnum;
}

export const mAXPAYMENTATTEMPTSEXCEEDEDERRORRESPONSESchema: Schema<MAXPAYMENTATTEMPTSEXCEEDEDERRORRESPONSE> = object(
  {
    issue: [
      'issue',
      optional(maxNumberOfPaymentAttemptsExceeded2IssueEnumSchema),
    ],
    description: [
      'description',
      optional(exceededMaxPaymentAttemptsDescEnumSchema),
    ],
  }
);
