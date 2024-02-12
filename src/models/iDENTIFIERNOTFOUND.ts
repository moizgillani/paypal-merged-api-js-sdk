/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  IdentifierNotFoundDescriptionEnum,
  identifierNotFoundDescriptionEnumSchema,
} from './identifierNotFoundDescriptionEnum';
import {
  IdentifierNotFoundIssueEnum,
  identifierNotFoundIssueEnumSchema,
} from './identifierNotFoundIssueEnum';

export interface IDENTIFIERNOTFOUND {
  issue?: IdentifierNotFoundIssueEnum;
  description?: IdentifierNotFoundDescriptionEnum;
}

export const iDENTIFIERNOTFOUNDSchema: Schema<IDENTIFIERNOTFOUND> = object({
  issue: ['issue', optional(identifierNotFoundIssueEnumSchema)],
  description: [
    'description',
    optional(identifierNotFoundDescriptionEnumSchema),
  ],
});