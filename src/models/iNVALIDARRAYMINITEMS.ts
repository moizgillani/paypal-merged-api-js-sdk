/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidArrayMinItemsDescriptionEnum,
  invalidArrayMinItemsDescriptionEnumSchema,
} from './invalidArrayMinItemsDescriptionEnum';
import {
  InvalidArrayMinItemsIssueEnum,
  invalidArrayMinItemsIssueEnumSchema,
} from './invalidArrayMinItemsIssueEnum';

export interface INVALIDARRAYMINITEMS {
  issue?: InvalidArrayMinItemsIssueEnum;
  description?: InvalidArrayMinItemsDescriptionEnum;
}

export const iNVALIDARRAYMINITEMSSchema: Schema<INVALIDARRAYMINITEMS> = object({
  issue: ['issue', optional(invalidArrayMinItemsIssueEnumSchema)],
  description: [
    'description',
    optional(invalidArrayMinItemsDescriptionEnumSchema),
  ],
});
