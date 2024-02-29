/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AuthorizationDeniedDescriptionEnum,
  authorizationDeniedDescriptionEnumSchema,
} from './authorizationDeniedDescriptionEnum';
import {
  AuthorizationDeniedIssueEnum,
  authorizationDeniedIssueEnumSchema,
} from './authorizationDeniedIssueEnum';

export interface AUTHORIZATIONDENIED {
  issue?: AuthorizationDeniedIssueEnum;
  description?: AuthorizationDeniedDescriptionEnum;
}

export const aUTHORIZATIONDENIEDSchema: Schema<AUTHORIZATIONDENIED> = object({
  issue: ['issue', optional(authorizationDeniedIssueEnumSchema)],
  description: [
    'description',
    optional(authorizationDeniedDescriptionEnumSchema),
  ],
});
