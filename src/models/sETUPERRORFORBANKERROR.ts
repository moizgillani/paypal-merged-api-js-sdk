/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  SetupErrorForBank1DescriptionEnum,
  setupErrorForBank1DescriptionEnumSchema,
} from './setupErrorForBank1DescriptionEnum';
import {
  SetupErrorForBank1IssueEnum,
  setupErrorForBank1IssueEnumSchema,
} from './setupErrorForBank1IssueEnum';

export interface SETUPERRORFORBANKERROR {
  issue?: SetupErrorForBank1IssueEnum;
  description?: SetupErrorForBank1DescriptionEnum;
}

export const sETUPERRORFORBANKERRORSchema: Schema<SETUPERRORFORBANKERROR> = object(
  {
    issue: ['issue', optional(setupErrorForBank1IssueEnumSchema)],
    description: [
      'description',
      optional(setupErrorForBank1DescriptionEnumSchema),
    ],
  }
);
