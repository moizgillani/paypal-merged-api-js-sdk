/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CurrencyNotSupportedForCountryDescriptionEnum,
  currencyNotSupportedForCountryDescriptionEnumSchema,
} from './currencyNotSupportedForCountryDescriptionEnum';
import {
  CurrencyNotSupportedForCountryIssueEnum,
  currencyNotSupportedForCountryIssueEnumSchema,
} from './currencyNotSupportedForCountryIssueEnum';

export interface CURRENCYNOTSUPPORTEDFORCOUNTRY {
  issue?: CurrencyNotSupportedForCountryIssueEnum;
  description?: CurrencyNotSupportedForCountryDescriptionEnum;
}

export const cURRENCYNOTSUPPORTEDFORCOUNTRYSchema: Schema<CURRENCYNOTSUPPORTEDFORCOUNTRY> = object(
  {
    issue: ['issue', optional(currencyNotSupportedForCountryIssueEnumSchema)],
    description: [
      'description',
      optional(currencyNotSupportedForCountryDescriptionEnumSchema),
    ],
  }
);