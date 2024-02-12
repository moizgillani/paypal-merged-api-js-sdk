/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidGooglePayToken1DescriptionEnum,
  invalidGooglePayToken1DescriptionEnumSchema,
} from './invalidGooglePayToken1DescriptionEnum';
import {
  InvalidGooglePayToken1IssueEnum,
  invalidGooglePayToken1IssueEnumSchema,
} from './invalidGooglePayToken1IssueEnum';

export interface INVALIDGOOGLEPAYTOKENERROR {
  issue?: InvalidGooglePayToken1IssueEnum;
  description?: InvalidGooglePayToken1DescriptionEnum;
}

export const iNVALIDGOOGLEPAYTOKENERRORSchema: Schema<INVALIDGOOGLEPAYTOKENERROR> = object(
  {
    issue: ['issue', optional(invalidGooglePayToken1IssueEnumSchema)],
    description: [
      'description',
      optional(invalidGooglePayToken1DescriptionEnumSchema),
    ],
  }
);
