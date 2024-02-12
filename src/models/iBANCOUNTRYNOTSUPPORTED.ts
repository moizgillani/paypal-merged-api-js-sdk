/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  IbanCountryNotSupportedDescriptionEnum,
  ibanCountryNotSupportedDescriptionEnumSchema,
} from './ibanCountryNotSupportedDescriptionEnum';
import {
  IbanCountryNotSupportedIssueEnum,
  ibanCountryNotSupportedIssueEnumSchema,
} from './ibanCountryNotSupportedIssueEnum';

export interface IBANCOUNTRYNOTSUPPORTED {
  issue?: IbanCountryNotSupportedIssueEnum;
  description?: IbanCountryNotSupportedDescriptionEnum;
}

export const iBANCOUNTRYNOTSUPPORTEDSchema: Schema<IBANCOUNTRYNOTSUPPORTED> = object(
  {
    issue: ['issue', optional(ibanCountryNotSupportedIssueEnumSchema)],
    description: [
      'description',
      optional(ibanCountryNotSupportedDescriptionEnumSchema),
    ],
  }
);
