/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PermissionDeniedDescriptionEnum,
  permissionDeniedDescriptionEnumSchema,
} from './permissionDeniedDescriptionEnum';
import {
  PermissionDeniedIssueEnum,
  permissionDeniedIssueEnumSchema,
} from './permissionDeniedIssueEnum';

export interface ForbiddenErrorIssuesItems {
  issue?: PermissionDeniedIssueEnum;
  description?: PermissionDeniedDescriptionEnum;
}

export const forbiddenErrorIssuesItemsSchema: Schema<ForbiddenErrorIssuesItems> = object(
  {
    issue: ['issue', optional(permissionDeniedIssueEnumSchema)],
    description: [
      'description',
      optional(permissionDeniedDescriptionEnumSchema),
    ],
  }
);