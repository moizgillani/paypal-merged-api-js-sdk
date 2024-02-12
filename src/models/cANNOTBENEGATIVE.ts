/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CannotBeNegativeDescriptionEnum,
  cannotBeNegativeDescriptionEnumSchema,
} from './cannotBeNegativeDescriptionEnum';
import {
  CannotBeNegativeIssueEnum,
  cannotBeNegativeIssueEnumSchema,
} from './cannotBeNegativeIssueEnum';

export interface CANNOTBENEGATIVE {
  issue?: CannotBeNegativeIssueEnum;
  description?: CannotBeNegativeDescriptionEnum;
}

export const cANNOTBENEGATIVESchema: Schema<CANNOTBENEGATIVE> = object({
  issue: ['issue', optional(cannotBeNegativeIssueEnumSchema)],
  description: ['description', optional(cannotBeNegativeDescriptionEnumSchema)],
});