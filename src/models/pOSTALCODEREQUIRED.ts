/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PostalCodeRequiredDescriptionEnum,
  postalCodeRequiredDescriptionEnumSchema,
} from './postalCodeRequiredDescriptionEnum';
import {
  PostalCodeRequiredIssueEnum,
  postalCodeRequiredIssueEnumSchema,
} from './postalCodeRequiredIssueEnum';

export interface POSTALCODEREQUIRED {
  issue?: PostalCodeRequiredIssueEnum;
  description?: PostalCodeRequiredDescriptionEnum;
}

export const pOSTALCODEREQUIREDSchema: Schema<POSTALCODEREQUIRED> = object({
  issue: ['issue', optional(postalCodeRequiredIssueEnumSchema)],
  description: [
    'description',
    optional(postalCodeRequiredDescriptionEnumSchema),
  ],
});
