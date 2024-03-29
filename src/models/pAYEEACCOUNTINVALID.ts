/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayeeAccountInvalidDescriptionEnum,
  payeeAccountInvalidDescriptionEnumSchema,
} from './payeeAccountInvalidDescriptionEnum';
import {
  PayeeAccountInvalidIssueEnum,
  payeeAccountInvalidIssueEnumSchema,
} from './payeeAccountInvalidIssueEnum';

export interface PAYEEACCOUNTINVALID {
  issue?: PayeeAccountInvalidIssueEnum;
  description?: PayeeAccountInvalidDescriptionEnum;
}

export const pAYEEACCOUNTINVALIDSchema: Schema<PAYEEACCOUNTINVALID> = object({
  issue: ['issue', optional(payeeAccountInvalidIssueEnumSchema)],
  description: [
    'description',
    optional(payeeAccountInvalidDescriptionEnumSchema),
  ],
});
