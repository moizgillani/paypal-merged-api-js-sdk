/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ConsentNeededDescriptionEnum,
  consentNeededDescriptionEnumSchema,
} from './consentNeededDescriptionEnum';
import {
  ConsentNeededIssueEnum,
  consentNeededIssueEnumSchema,
} from './consentNeededIssueEnum';

export interface CONSENTNEEDED {
  issue?: ConsentNeededIssueEnum;
  description?: ConsentNeededDescriptionEnum;
}

export const cONSENTNEEDEDSchema: Schema<CONSENTNEEDED> = object({
  issue: ['issue', optional(consentNeededIssueEnumSchema)],
  description: ['description', optional(consentNeededDescriptionEnumSchema)],
});
