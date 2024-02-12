/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  NotPatchable1DescriptionEnum,
  notPatchable1DescriptionEnumSchema,
} from './notPatchable1DescriptionEnum';
import {
  NotPatchable1IssueEnum,
  notPatchable1IssueEnumSchema,
} from './notPatchable1IssueEnum';

export interface NOTPATCHABLEERROR {
  issue?: NotPatchable1IssueEnum;
  description?: NotPatchable1DescriptionEnum;
}

export const nOTPATCHABLEERRORSchema: Schema<NOTPATCHABLEERROR> = object({
  issue: ['issue', optional(notPatchable1IssueEnumSchema)],
  description: ['description', optional(notPatchable1DescriptionEnumSchema)],
});