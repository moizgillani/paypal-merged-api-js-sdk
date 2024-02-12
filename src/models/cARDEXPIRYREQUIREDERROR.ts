/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CardExpiryRequired1DescriptionEnum,
  cardExpiryRequired1DescriptionEnumSchema,
} from './cardExpiryRequired1DescriptionEnum';
import {
  CardExpiryRequired1IssueEnum,
  cardExpiryRequired1IssueEnumSchema,
} from './cardExpiryRequired1IssueEnum';

export interface CARDEXPIRYREQUIREDERROR {
  issue?: CardExpiryRequired1IssueEnum;
  description?: CardExpiryRequired1DescriptionEnum;
}

export const cARDEXPIRYREQUIREDERRORSchema: Schema<CARDEXPIRYREQUIREDERROR> = object(
  {
    issue: ['issue', optional(cardExpiryRequired1IssueEnumSchema)],
    description: [
      'description',
      optional(cardExpiryRequired1DescriptionEnumSchema),
    ],
  }
);