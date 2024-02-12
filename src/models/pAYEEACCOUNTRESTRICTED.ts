/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayeeAccountRestrictedDescriptionEnum,
  payeeAccountRestrictedDescriptionEnumSchema,
} from './payeeAccountRestrictedDescriptionEnum';
import {
  PayeeAccountRestrictedIssueEnum,
  payeeAccountRestrictedIssueEnumSchema,
} from './payeeAccountRestrictedIssueEnum';

export interface PAYEEACCOUNTRESTRICTED {
  issue?: PayeeAccountRestrictedIssueEnum;
  description?: PayeeAccountRestrictedDescriptionEnum;
}

export const pAYEEACCOUNTRESTRICTEDSchema: Schema<PAYEEACCOUNTRESTRICTED> = object(
  {
    issue: ['issue', optional(payeeAccountRestrictedIssueEnumSchema)],
    description: [
      'description',
      optional(payeeAccountRestrictedDescriptionEnumSchema),
    ],
  }
);
