/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayerAccountRestrictedIssueEnum
 */
export enum PayerAccountRestrictedIssueEnum {
  PAYERACCOUNTRESTRICTED = 'PAYER_ACCOUNT_RESTRICTED',
}

/**
 * Schema for PayerAccountRestrictedIssueEnum
 */
export const payerAccountRestrictedIssueEnumSchema: Schema<PayerAccountRestrictedIssueEnum> = stringEnum(PayerAccountRestrictedIssueEnum);
