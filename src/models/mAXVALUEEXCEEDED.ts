/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MaxValueExceededDescriptionEnum,
  maxValueExceededDescriptionEnumSchema,
} from './maxValueExceededDescriptionEnum';
import {
  MaxValueExceededIssueEnum,
  maxValueExceededIssueEnumSchema,
} from './maxValueExceededIssueEnum';

export interface MAXVALUEEXCEEDED {
  issue?: MaxValueExceededIssueEnum;
  description?: MaxValueExceededDescriptionEnum;
}

export const mAXVALUEEXCEEDEDSchema: Schema<MAXVALUEEXCEEDED> = object({
  issue: ['issue', optional(maxValueExceededIssueEnumSchema)],
  description: ['description', optional(maxValueExceededDescriptionEnumSchema)],
});
