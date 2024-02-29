/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MaxCaptureCountExceededDescriptionEnum,
  maxCaptureCountExceededDescriptionEnumSchema,
} from './maxCaptureCountExceededDescriptionEnum';
import {
  MaxCaptureCountExceededIssueEnum,
  maxCaptureCountExceededIssueEnumSchema,
} from './maxCaptureCountExceededIssueEnum';

export interface MAXCAPTURECOUNTEXCEEDED {
  issue?: MaxCaptureCountExceededIssueEnum;
  description?: MaxCaptureCountExceededDescriptionEnum;
}

export const mAXCAPTURECOUNTEXCEEDEDSchema: Schema<MAXCAPTURECOUNTEXCEEDED> = object(
  {
    issue: ['issue', optional(maxCaptureCountExceededIssueEnumSchema)],
    description: [
      'description',
      optional(maxCaptureCountExceededDescriptionEnumSchema),
    ],
  }
);
