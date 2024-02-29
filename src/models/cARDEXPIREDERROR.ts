/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CardExpired1DescriptionEnum,
  cardExpired1DescriptionEnumSchema,
} from './cardExpired1DescriptionEnum';
import {
  CardExpired1IssueEnum,
  cardExpired1IssueEnumSchema,
} from './cardExpired1IssueEnum';

export interface CARDEXPIREDERROR {
  issue?: CardExpired1IssueEnum;
  description?: CardExpired1DescriptionEnum;
}

export const cARDEXPIREDERRORSchema: Schema<CARDEXPIREDERROR> = object({
  issue: ['issue', optional(cardExpired1IssueEnumSchema)],
  description: ['description', optional(cardExpired1DescriptionEnumSchema)],
});
