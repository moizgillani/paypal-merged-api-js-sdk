/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ReferencedCardExpired1DescriptionEnum,
  referencedCardExpired1DescriptionEnumSchema,
} from './referencedCardExpired1DescriptionEnum';
import {
  ReferencedCardExpired1IssueEnum,
  referencedCardExpired1IssueEnumSchema,
} from './referencedCardExpired1IssueEnum';

export interface REFERENCEDCARDEXPIREDERROR {
  issue?: ReferencedCardExpired1IssueEnum;
  description?: ReferencedCardExpired1DescriptionEnum;
}

export const rEFERENCEDCARDEXPIREDERRORSchema: Schema<REFERENCEDCARDEXPIREDERROR> = object(
  {
    issue: ['issue', optional(referencedCardExpired1IssueEnumSchema)],
    description: [
      'description',
      optional(referencedCardExpired1DescriptionEnumSchema),
    ],
  }
);