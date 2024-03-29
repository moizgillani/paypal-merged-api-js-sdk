/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  OnlyOneBankSourceAllowedDescriptionEnum,
  onlyOneBankSourceAllowedDescriptionEnumSchema,
} from './onlyOneBankSourceAllowedDescriptionEnum';
import {
  OnlyOneBankSourceAllowedIssueEnum,
  onlyOneBankSourceAllowedIssueEnumSchema,
} from './onlyOneBankSourceAllowedIssueEnum';

export interface ONLYONEBANKSOURCEALLOWED {
  issue?: OnlyOneBankSourceAllowedIssueEnum;
  description?: OnlyOneBankSourceAllowedDescriptionEnum;
}

export const oNLYONEBANKSOURCEALLOWEDSchema: Schema<ONLYONEBANKSOURCEALLOWED> = object(
  {
    issue: ['issue', optional(onlyOneBankSourceAllowedIssueEnumSchema)],
    description: [
      'description',
      optional(onlyOneBankSourceAllowedDescriptionEnumSchema),
    ],
  }
);
