/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MissingRequiredParameterDescriptionEnum,
  missingRequiredParameterDescriptionEnumSchema,
} from './missingRequiredParameterDescriptionEnum';
import {
  MissingRequiredParameterIssueEnum,
  missingRequiredParameterIssueEnumSchema,
} from './missingRequiredParameterIssueEnum';

export interface MISSINGREQUIREDPARAMETER {
  issue?: MissingRequiredParameterIssueEnum;
  description?: MissingRequiredParameterDescriptionEnum;
}

export const mISSINGREQUIREDPARAMETERSchema: Schema<MISSINGREQUIREDPARAMETER> = object(
  {
    issue: ['issue', optional(missingRequiredParameterIssueEnumSchema)],
    description: [
      'description',
      optional(missingRequiredParameterDescriptionEnumSchema),
    ],
  }
);