/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AuthorizationsVoid422IssuesItemsAnyof2DescriptionEnum,
  authorizationsVoid422IssuesItemsAnyof2DescriptionEnumSchema,
} from './authorizationsVoid422IssuesItemsAnyof2DescriptionEnum';
import {
  AuthorizationsVoid422IssuesItemsAnyof2IssueEnum,
  authorizationsVoid422IssuesItemsAnyof2IssueEnumSchema,
} from './authorizationsVoid422IssuesItemsAnyof2IssueEnum';

export interface CANNOTBEVOIDED {
  issue?: AuthorizationsVoid422IssuesItemsAnyof2IssueEnum;
  description?: AuthorizationsVoid422IssuesItemsAnyof2DescriptionEnum;
}

export const cANNOTBEVOIDEDSchema: Schema<CANNOTBEVOIDED> = object({
  issue: [
    'issue',
    optional(authorizationsVoid422IssuesItemsAnyof2IssueEnumSchema),
  ],
  description: [
    'description',
    optional(authorizationsVoid422IssuesItemsAnyof2DescriptionEnumSchema),
  ],
});
