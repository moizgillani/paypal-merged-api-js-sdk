/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  NotPatchableDescriptionEnum,
  notPatchableDescriptionEnumSchema,
} from './notPatchableDescriptionEnum';
import {
  NotPatchableIssueEnum,
  notPatchableIssueEnumSchema,
} from './notPatchableIssueEnum';

export interface NOTPATCHABLE {
  issue?: NotPatchableIssueEnum;
  description?: NotPatchableDescriptionEnum;
}

export const nOTPATCHABLESchema: Schema<NOTPATCHABLE> = object({
  issue: ['issue', optional(notPatchableIssueEnumSchema)],
  description: ['description', optional(notPatchableDescriptionEnumSchema)],
});
