/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayeeFXRateIdCurrencyMismatchDescriptionEnum,
  payeeFXRateIdCurrencyMismatchDescriptionEnumSchema,
} from './payeeFXRateIdCurrencyMismatchDescriptionEnum';
import {
  PayeeFXRateIdCurrencyMismatchIssueEnum,
  payeeFXRateIdCurrencyMismatchIssueEnumSchema,
} from './payeeFXRateIdCurrencyMismatchIssueEnum';

export interface PAYEEFXRATEIDCURRENCYMISMATCH {
  issue?: PayeeFXRateIdCurrencyMismatchIssueEnum;
  description?: PayeeFXRateIdCurrencyMismatchDescriptionEnum;
}

export const pAYEEFXRATEIDCURRENCYMISMATCHSchema: Schema<PAYEEFXRATEIDCURRENCYMISMATCH> = object(
  {
    issue: ['issue', optional(payeeFXRateIdCurrencyMismatchIssueEnumSchema)],
    description: [
      'description',
      optional(payeeFXRateIdCurrencyMismatchDescriptionEnumSchema),
    ],
  }
);
