/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PermissionDeniedForDonationItems1DescriptionEnum,
  permissionDeniedForDonationItems1DescriptionEnumSchema,
} from './permissionDeniedForDonationItems1DescriptionEnum';
import {
  PermissionDeniedForDonationItems1IssueEnum,
  permissionDeniedForDonationItems1IssueEnumSchema,
} from './permissionDeniedForDonationItems1IssueEnum';

export interface PERMISSIONDENIEDFORDONATIONITEMSERROR {
  issue?: PermissionDeniedForDonationItems1IssueEnum;
  description?: PermissionDeniedForDonationItems1DescriptionEnum;
}

export const pERMISSIONDENIEDFORDONATIONITEMSERRORSchema: Schema<PERMISSIONDENIEDFORDONATIONITEMSERROR> = object(
  {
    issue: [
      'issue',
      optional(permissionDeniedForDonationItems1IssueEnumSchema),
    ],
    description: [
      'description',
      optional(permissionDeniedForDonationItems1DescriptionEnumSchema),
    ],
  }
);
