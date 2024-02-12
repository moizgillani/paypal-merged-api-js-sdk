/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PermissionDenied1DescriptionEnum,
  permissionDenied1DescriptionEnumSchema,
} from './permissionDenied1DescriptionEnum';
import {
  PermissionDenied1IssueEnum,
  permissionDenied1IssueEnumSchema,
} from './permissionDenied1IssueEnum';

export interface PERMISSIONDENIEDERROR {
  issue?: PermissionDenied1IssueEnum;
  description?: PermissionDenied1DescriptionEnum;
}

export const pERMISSIONDENIEDERRORSchema: Schema<PERMISSIONDENIEDERROR> = object(
  {
    issue: ['issue', optional(permissionDenied1IssueEnumSchema)],
    description: [
      'description',
      optional(permissionDenied1DescriptionEnumSchema),
    ],
  }
);
