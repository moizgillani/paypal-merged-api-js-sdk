/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayeeAccountLockedOrClosedDescriptionEnum,
  payeeAccountLockedOrClosedDescriptionEnumSchema,
} from './payeeAccountLockedOrClosedDescriptionEnum';
import {
  PayeeAccountLockedOrClosedIssueEnum,
  payeeAccountLockedOrClosedIssueEnumSchema,
} from './payeeAccountLockedOrClosedIssueEnum';

export interface PAYEEACCOUNTLOCKEDORCLOSED {
  issue?: PayeeAccountLockedOrClosedIssueEnum;
  description?: PayeeAccountLockedOrClosedDescriptionEnum;
}

export const pAYEEACCOUNTLOCKEDORCLOSEDSchema: Schema<PAYEEACCOUNTLOCKEDORCLOSED> = object(
  {
    issue: ['issue', optional(payeeAccountLockedOrClosedIssueEnumSchema)],
    description: [
      'description',
      optional(payeeAccountLockedOrClosedDescriptionEnumSchema),
    ],
  }
);
