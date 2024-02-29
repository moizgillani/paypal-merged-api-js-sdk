/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AuthorizationVoidedDescriptionEnum,
  authorizationVoidedDescriptionEnumSchema,
} from './authorizationVoidedDescriptionEnum';
import {
  AuthorizationVoidedIssueEnum,
  authorizationVoidedIssueEnumSchema,
} from './authorizationVoidedIssueEnum';

export interface AUTHORIZATIONVOIDED {
  issue?: AuthorizationVoidedIssueEnum;
  description?: AuthorizationVoidedDescriptionEnum;
}

export const aUTHORIZATIONVOIDEDSchema: Schema<AUTHORIZATIONVOIDED> = object({
  issue: ['issue', optional(authorizationVoidedIssueEnumSchema)],
  description: [
    'description',
    optional(authorizationVoidedDescriptionEnumSchema),
  ],
});
