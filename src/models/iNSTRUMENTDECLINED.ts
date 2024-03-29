/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InstrumentDeclinedDescriptionEnum,
  instrumentDeclinedDescriptionEnumSchema,
} from './instrumentDeclinedDescriptionEnum';
import {
  InstrumentDeclinedIssueEnum,
  instrumentDeclinedIssueEnumSchema,
} from './instrumentDeclinedIssueEnum';

export interface INSTRUMENTDECLINED {
  issue?: InstrumentDeclinedIssueEnum;
  description?: InstrumentDeclinedDescriptionEnum;
}

export const iNSTRUMENTDECLINEDSchema: Schema<INSTRUMENTDECLINED> = object({
  issue: ['issue', optional(instrumentDeclinedIssueEnumSchema)],
  description: [
    'description',
    optional(instrumentDeclinedDescriptionEnumSchema),
  ],
});
