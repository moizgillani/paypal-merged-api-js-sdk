/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MissingRequiredParameterDescriptionPaymentsEnum,
  missingRequiredParameterDescriptionPaymentsEnumSchema,
} from './missingRequiredParameterDescriptionPaymentsEnum';
import {
  MissingRequiredParameterIssueEnum,
  missingRequiredParameterIssueEnumSchema,
} from './missingRequiredParameterIssueEnum';

export interface Capturesrefund400issuesItems {
  issue?: MissingRequiredParameterIssueEnum;
  description?: MissingRequiredParameterDescriptionPaymentsEnum;
}

export const capturesrefund400issuesItemsSchema: Schema<Capturesrefund400issuesItems> = object(
  {
    issue: ['issue', optional(missingRequiredParameterIssueEnumSchema)],
    description: [
      'description',
      optional(missingRequiredParameterDescriptionPaymentsEnumSchema),
    ],
  }
);
