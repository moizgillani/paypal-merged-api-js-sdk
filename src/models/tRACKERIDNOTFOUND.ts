/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  TrackerIdNotFoundDescriptionEnum,
  trackerIdNotFoundDescriptionEnumSchema,
} from './trackerIdNotFoundDescriptionEnum';
import {
  TrackerIdNotFoundIssueEnum,
  trackerIdNotFoundIssueEnumSchema,
} from './trackerIdNotFoundIssueEnum';

export interface TRACKERIDNOTFOUND {
  issue?: TrackerIdNotFoundIssueEnum;
  description?: TrackerIdNotFoundDescriptionEnum;
}

export const tRACKERIDNOTFOUNDSchema: Schema<TRACKERIDNOTFOUND> = object({
  issue: ['issue', optional(trackerIdNotFoundIssueEnumSchema)],
  description: [
    'description',
    optional(trackerIdNotFoundDescriptionEnumSchema),
  ],
});
