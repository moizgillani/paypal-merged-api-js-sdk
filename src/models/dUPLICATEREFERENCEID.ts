/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  DuplicateReferenceIdDescriptionEnum,
  duplicateReferenceIdDescriptionEnumSchema,
} from './duplicateReferenceIdDescriptionEnum';
import {
  DuplicateReferenceIdIssueEnum,
  duplicateReferenceIdIssueEnumSchema,
} from './duplicateReferenceIdIssueEnum';

export interface DUPLICATEREFERENCEID {
  issue?: DuplicateReferenceIdIssueEnum;
  description?: DuplicateReferenceIdDescriptionEnum;
}

export const dUPLICATEREFERENCEIDSchema: Schema<DUPLICATEREFERENCEID> = object({
  issue: ['issue', optional(duplicateReferenceIdIssueEnumSchema)],
  description: [
    'description',
    optional(duplicateReferenceIdDescriptionEnumSchema),
  ],
});
