/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CaptureIdNotFoundDescriptionEnum,
  captureIdNotFoundDescriptionEnumSchema,
} from './captureIdNotFoundDescriptionEnum';
import {
  CaptureIdNotFoundIssueEnum,
  captureIdNotFoundIssueEnumSchema,
} from './captureIdNotFoundIssueEnum';

export interface CAPTUREIDNOTFOUND {
  issue?: CaptureIdNotFoundIssueEnum;
  description?: CaptureIdNotFoundDescriptionEnum;
}

export const cAPTUREIDNOTFOUNDSchema: Schema<CAPTUREIDNOTFOUND> = object({
  issue: ['issue', optional(captureIdNotFoundIssueEnumSchema)],
  description: [
    'description',
    optional(captureIdNotFoundDescriptionEnumSchema),
  ],
});
