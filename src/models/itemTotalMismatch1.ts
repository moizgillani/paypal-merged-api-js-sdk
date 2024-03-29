/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ItemTotalMismatch1DescriptionEnum,
  itemTotalMismatch1DescriptionEnumSchema,
} from './itemTotalMismatch1DescriptionEnum';
import {
  ItemTotalMismatch1IssueEnum,
  itemTotalMismatch1IssueEnumSchema,
} from './itemTotalMismatch1IssueEnum';

export interface ItemTotalMismatch1 {
  issue?: ItemTotalMismatch1IssueEnum;
  description?: ItemTotalMismatch1DescriptionEnum;
}

export const itemTotalMismatch1Schema: Schema<ItemTotalMismatch1> = object({
  issue: ['issue', optional(itemTotalMismatch1IssueEnumSchema)],
  description: [
    'description',
    optional(itemTotalMismatch1DescriptionEnumSchema),
  ],
});
