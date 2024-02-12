/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ItemSkuMismatch1DescriptionEnum,
  itemSkuMismatch1DescriptionEnumSchema,
} from './itemSkuMismatch1DescriptionEnum';
import {
  ItemSkuMismatch1IssueEnum,
  itemSkuMismatch1IssueEnumSchema,
} from './itemSkuMismatch1IssueEnum';

export interface ITEMSKUMISMATCHERROR {
  issue?: ItemSkuMismatch1IssueEnum;
  description?: ItemSkuMismatch1DescriptionEnum;
}

export const iTEMSKUMISMATCHERRORSchema: Schema<ITEMSKUMISMATCHERROR> = object({
  issue: ['issue', optional(itemSkuMismatch1IssueEnumSchema)],
  description: ['description', optional(itemSkuMismatch1DescriptionEnumSchema)],
});
