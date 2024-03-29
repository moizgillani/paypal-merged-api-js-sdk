/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayerAccountRestricted2DescriptionEnum,
  payerAccountRestricted2DescriptionEnumSchema,
} from './payerAccountRestricted2DescriptionEnum';
import {
  PayerAccountRestricted2IssueEnum,
  payerAccountRestricted2IssueEnumSchema,
} from './payerAccountRestricted2IssueEnum';

export interface PAYERACCOUNTRESTRICTEDERRORRESPONSE {
  issue?: PayerAccountRestricted2IssueEnum;
  description?: PayerAccountRestricted2DescriptionEnum;
}

export const pAYERACCOUNTRESTRICTEDERRORRESPONSESchema: Schema<PAYERACCOUNTRESTRICTEDERRORRESPONSE> = object(
  {
    issue: ['issue', optional(payerAccountRestricted2IssueEnumSchema)],
    description: [
      'description',
      optional(payerAccountRestricted2DescriptionEnumSchema),
    ],
  }
);
