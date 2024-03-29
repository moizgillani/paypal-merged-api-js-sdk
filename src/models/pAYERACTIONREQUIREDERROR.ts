/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayerActionRequired1DescriptionEnum,
  payerActionRequired1DescriptionEnumSchema,
} from './payerActionRequired1DescriptionEnum';
import {
  PayerActionRequired1IssueEnum,
  payerActionRequired1IssueEnumSchema,
} from './payerActionRequired1IssueEnum';

export interface PAYERACTIONREQUIREDERROR {
  issue?: PayerActionRequired1IssueEnum;
  description?: PayerActionRequired1DescriptionEnum;
}

export const pAYERACTIONREQUIREDERRORSchema: Schema<PAYERACTIONREQUIREDERROR> = object(
  {
    issue: ['issue', optional(payerActionRequired1IssueEnumSchema)],
    description: [
      'description',
      optional(payerActionRequired1DescriptionEnumSchema),
    ],
  }
);
