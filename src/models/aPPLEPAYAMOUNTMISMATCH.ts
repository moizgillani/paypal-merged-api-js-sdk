/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ApplePayAmountMismatchDescriptionEnum,
  applePayAmountMismatchDescriptionEnumSchema,
} from './applePayAmountMismatchDescriptionEnum';
import {
  ApplePayAmountMismatchIssueEnum,
  applePayAmountMismatchIssueEnumSchema,
} from './applePayAmountMismatchIssueEnum';

export interface APPLEPAYAMOUNTMISMATCH {
  issue?: ApplePayAmountMismatchIssueEnum;
  description?: ApplePayAmountMismatchDescriptionEnum;
}

export const aPPLEPAYAMOUNTMISMATCHSchema: Schema<APPLEPAYAMOUNTMISMATCH> = object(
  {
    issue: ['issue', optional(applePayAmountMismatchIssueEnumSchema)],
    description: [
      'description',
      optional(applePayAmountMismatchDescriptionEnumSchema),
    ],
  }
);
