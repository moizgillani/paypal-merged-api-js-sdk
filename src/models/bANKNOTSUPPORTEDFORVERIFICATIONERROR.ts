/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  BankNotSupportedForVerification1DescriptionEnum,
  bankNotSupportedForVerification1DescriptionEnumSchema,
} from './bankNotSupportedForVerification1DescriptionEnum';
import {
  BankNotSupportedForVerification1IssueEnum,
  bankNotSupportedForVerification1IssueEnumSchema,
} from './bankNotSupportedForVerification1IssueEnum';

export interface BANKNOTSUPPORTEDFORVERIFICATIONERROR {
  issue?: BankNotSupportedForVerification1IssueEnum;
  description?: BankNotSupportedForVerification1DescriptionEnum;
}

export const bANKNOTSUPPORTEDFORVERIFICATIONERRORSchema: Schema<BANKNOTSUPPORTEDFORVERIFICATIONERROR> = object(
  {
    issue: ['issue', optional(bankNotSupportedForVerification1IssueEnumSchema)],
    description: [
      'description',
      optional(bankNotSupportedForVerification1DescriptionEnumSchema),
    ],
  }
);