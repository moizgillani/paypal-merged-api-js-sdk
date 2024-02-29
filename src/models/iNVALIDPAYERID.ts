/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidPayerIdDescriptionEnum,
  invalidPayerIdDescriptionEnumSchema,
} from './invalidPayerIdDescriptionEnum';
import {
  InvalidPayerIdIssueEnum,
  invalidPayerIdIssueEnumSchema,
} from './invalidPayerIdIssueEnum';

export interface INVALIDPAYERID {
  issue?: InvalidPayerIdIssueEnum;
  description?: InvalidPayerIdDescriptionEnum;
}

export const iNVALIDPAYERIDSchema: Schema<INVALIDPAYERID> = object({
  issue: ['issue', optional(invalidPayerIdIssueEnumSchema)],
  description: ['description', optional(invalidPayerIdDescriptionEnumSchema)],
});
