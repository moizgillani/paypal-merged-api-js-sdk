/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  TaxTotalMismatchDescriptionEnum,
  taxTotalMismatchDescriptionEnumSchema,
} from './taxTotalMismatchDescriptionEnum';
import {
  TaxTotalMismatchIssueEnum,
  taxTotalMismatchIssueEnumSchema,
} from './taxTotalMismatchIssueEnum';

export interface TAXTOTALMISMATCH {
  issue?: TaxTotalMismatchIssueEnum;
  description?: TaxTotalMismatchDescriptionEnum;
}

export const tAXTOTALMISMATCHSchema: Schema<TAXTOTALMISMATCH> = object({
  issue: ['issue', optional(taxTotalMismatchIssueEnumSchema)],
  description: ['description', optional(taxTotalMismatchDescriptionEnumSchema)],
});
