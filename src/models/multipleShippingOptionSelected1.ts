/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MultipleShippingOptionSelected1DescriptionEnum,
  multipleShippingOptionSelected1DescriptionEnumSchema,
} from './multipleShippingOptionSelected1DescriptionEnum';
import {
  MultipleShippingOptionSelected1IssueEnum,
  multipleShippingOptionSelected1IssueEnumSchema,
} from './multipleShippingOptionSelected1IssueEnum';

export interface MultipleShippingOptionSelected1 {
  issue?: MultipleShippingOptionSelected1IssueEnum;
  description?: MultipleShippingOptionSelected1DescriptionEnum;
}

export const multipleShippingOptionSelected1Schema: Schema<MultipleShippingOptionSelected1> = object(
  {
    issue: ['issue', optional(multipleShippingOptionSelected1IssueEnumSchema)],
    description: [
      'description',
      optional(multipleShippingOptionSelected1DescriptionEnumSchema),
    ],
  }
);
