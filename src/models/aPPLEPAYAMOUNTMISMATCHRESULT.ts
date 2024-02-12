/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ApplePayAmountMismatch2DescriptionEnum,
  applePayAmountMismatch2DescriptionEnumSchema,
} from './applePayAmountMismatch2DescriptionEnum';
import {
  ApplePayAmountMismatch2IssueEnum,
  applePayAmountMismatch2IssueEnumSchema,
} from './applePayAmountMismatch2IssueEnum';

export interface APPLEPAYAMOUNTMISMATCHRESULT {
  issue?: ApplePayAmountMismatch2IssueEnum;
  description?: ApplePayAmountMismatch2DescriptionEnum;
}

export const aPPLEPAYAMOUNTMISMATCHRESULTSchema: Schema<APPLEPAYAMOUNTMISMATCHRESULT> = object(
  {
    issue: ['issue', optional(applePayAmountMismatch2IssueEnumSchema)],
    description: [
      'description',
      optional(applePayAmountMismatch2DescriptionEnumSchema),
    ],
  }
);