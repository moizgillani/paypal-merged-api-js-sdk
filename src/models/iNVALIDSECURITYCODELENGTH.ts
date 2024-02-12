/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidSecurityCodeLengthDescriptionEnum,
  invalidSecurityCodeLengthDescriptionEnumSchema,
} from './invalidSecurityCodeLengthDescriptionEnum';
import {
  InvalidSecurityCodeLengthIssueEnum,
  invalidSecurityCodeLengthIssueEnumSchema,
} from './invalidSecurityCodeLengthIssueEnum';

export interface INVALIDSECURITYCODELENGTH {
  issue?: InvalidSecurityCodeLengthIssueEnum;
  description?: InvalidSecurityCodeLengthDescriptionEnum;
}

export const iNVALIDSECURITYCODELENGTHSchema: Schema<INVALIDSECURITYCODELENGTH> = object(
  {
    issue: ['issue', optional(invalidSecurityCodeLengthIssueEnumSchema)],
    description: [
      'description',
      optional(invalidSecurityCodeLengthDescriptionEnumSchema),
    ],
  }
);
