/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AuthorizationsVoid422IssuesItemsAnyof0DescriptionEnum,
  authorizationsVoid422IssuesItemsAnyof0DescriptionEnumSchema,
} from './authorizationsVoid422IssuesItemsAnyof0DescriptionEnum';
import {
  AuthorizationsVoid422IssuesItemsAnyof0IssueEnum,
  authorizationsVoid422IssuesItemsAnyof0IssueEnumSchema,
} from './authorizationsVoid422IssuesItemsAnyof0IssueEnum';

export interface Authorizationsvoid422issuesItems {
  issue?: AuthorizationsVoid422IssuesItemsAnyof0IssueEnum;
  description?: AuthorizationsVoid422IssuesItemsAnyof0DescriptionEnum;
}

export const authorizationsvoid422issuesItemsSchema: Schema<Authorizationsvoid422issuesItems> = object(
  {
    issue: [
      'issue',
      optional(authorizationsVoid422IssuesItemsAnyof0IssueEnumSchema),
    ],
    description: [
      'description',
      optional(authorizationsVoid422IssuesItemsAnyof0DescriptionEnumSchema),
    ],
  }
);
