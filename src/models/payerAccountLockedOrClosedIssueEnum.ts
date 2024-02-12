/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayerAccountLockedOrClosedIssueEnum
 */
export enum PayerAccountLockedOrClosedIssueEnum {
  PAYERACCOUNTLOCKEDORCLOSED = 'PAYER_ACCOUNT_LOCKED_OR_CLOSED',
}

/**
 * Schema for PayerAccountLockedOrClosedIssueEnum
 */
export const payerAccountLockedOrClosedIssueEnumSchema: Schema<PayerAccountLockedOrClosedIssueEnum> = stringEnum(PayerAccountLockedOrClosedIssueEnum);
