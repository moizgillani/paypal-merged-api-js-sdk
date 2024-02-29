/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidIban1DescriptionEnum,
  invalidIban1DescriptionEnumSchema,
} from './invalidIban1DescriptionEnum';
import {
  InvalidIban1IssueEnum,
  invalidIban1IssueEnumSchema,
} from './invalidIban1IssueEnum';

export interface INVALIDIBANERROR {
  issue?: InvalidIban1IssueEnum;
  description?: InvalidIban1DescriptionEnum;
}

export const iNVALIDIBANERRORSchema: Schema<INVALIDIBANERROR> = object({
  issue: ['issue', optional(invalidIban1IssueEnumSchema)],
  description: ['description', optional(invalidIban1DescriptionEnumSchema)],
});
