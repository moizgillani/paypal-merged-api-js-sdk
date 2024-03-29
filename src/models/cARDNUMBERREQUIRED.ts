/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CardNumberRequiredDescriptionEnum,
  cardNumberRequiredDescriptionEnumSchema,
} from './cardNumberRequiredDescriptionEnum';
import {
  CardNumberRequiredIssueEnum,
  cardNumberRequiredIssueEnumSchema,
} from './cardNumberRequiredIssueEnum';

export interface CARDNUMBERREQUIRED {
  issue?: CardNumberRequiredIssueEnum;
  description?: CardNumberRequiredDescriptionEnum;
}

export const cARDNUMBERREQUIREDSchema: Schema<CARDNUMBERREQUIRED> = object({
  issue: ['issue', optional(cardNumberRequiredIssueEnumSchema)],
  description: [
    'description',
    optional(cardNumberRequiredDescriptionEnumSchema),
  ],
});
