/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayerAccountRestricted1DescriptionEnum,
  payerAccountRestricted1DescriptionEnumSchema,
} from './payerAccountRestricted1DescriptionEnum';
import {
  PayerAccountRestricted1IssueEnum,
  payerAccountRestricted1IssueEnumSchema,
} from './payerAccountRestricted1IssueEnum';

export interface PAYERACCOUNTRESTRICTEDERROR {
  issue?: PayerAccountRestricted1IssueEnum;
  description?: PayerAccountRestricted1DescriptionEnum;
}

export const pAYERACCOUNTRESTRICTEDERRORSchema: Schema<PAYERACCOUNTRESTRICTEDERROR> = object(
  {
    issue: ['issue', optional(payerAccountRestricted1IssueEnumSchema)],
    description: [
      'description',
      optional(payerAccountRestricted1DescriptionEnumSchema),
    ],
  }
);
