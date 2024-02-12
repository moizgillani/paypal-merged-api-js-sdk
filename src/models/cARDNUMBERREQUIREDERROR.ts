/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CardNumberRequired1DescriptionEnum,
  cardNumberRequired1DescriptionEnumSchema,
} from './cardNumberRequired1DescriptionEnum';
import {
  CardNumberRequired1IssueEnum,
  cardNumberRequired1IssueEnumSchema,
} from './cardNumberRequired1IssueEnum';

export interface CARDNUMBERREQUIREDERROR {
  issue?: CardNumberRequired1IssueEnum;
  description?: CardNumberRequired1DescriptionEnum;
}

export const cARDNUMBERREQUIREDERRORSchema: Schema<CARDNUMBERREQUIREDERROR> = object(
  {
    issue: ['issue', optional(cardNumberRequired1IssueEnumSchema)],
    description: [
      'description',
      optional(cardNumberRequired1DescriptionEnumSchema),
    ],
  }
);