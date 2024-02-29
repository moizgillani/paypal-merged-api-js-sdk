/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ApplePayAmountMismatch1DescriptionEnum,
  applePayAmountMismatch1DescriptionEnumSchema,
} from './applePayAmountMismatch1DescriptionEnum';
import {
  ApplePayAmountMismatch1IssueEnum,
  applePayAmountMismatch1IssueEnumSchema,
} from './applePayAmountMismatch1IssueEnum';

export interface APPLEPAYAMOUNTMISMATCHERROR {
  issue?: ApplePayAmountMismatch1IssueEnum;
  description?: ApplePayAmountMismatch1DescriptionEnum;
}

export const aPPLEPAYAMOUNTMISMATCHERRORSchema: Schema<APPLEPAYAMOUNTMISMATCHERROR> = object(
  {
    issue: ['issue', optional(applePayAmountMismatch1IssueEnumSchema)],
    description: [
      'description',
      optional(applePayAmountMismatch1DescriptionEnumSchema),
    ],
  }
);
