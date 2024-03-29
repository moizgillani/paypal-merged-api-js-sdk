/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  DuplicateReferenceId1DescriptionEnum,
  duplicateReferenceId1DescriptionEnumSchema,
} from './duplicateReferenceId1DescriptionEnum';
import {
  DuplicateReferenceId1IssueEnum,
  duplicateReferenceId1IssueEnumSchema,
} from './duplicateReferenceId1IssueEnum';

export interface DuplicateReferenceID1 {
  issue?: DuplicateReferenceId1IssueEnum;
  description?: DuplicateReferenceId1DescriptionEnum;
}

export const duplicateReferenceID1Schema: Schema<DuplicateReferenceID1> = object(
  {
    issue: ['issue', optional(duplicateReferenceId1IssueEnumSchema)],
    description: [
      'description',
      optional(duplicateReferenceId1DescriptionEnumSchema),
    ],
  }
);
