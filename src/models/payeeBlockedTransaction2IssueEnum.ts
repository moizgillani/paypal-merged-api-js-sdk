/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayeeBlockedTransaction2IssueEnum
 */
export enum PayeeBlockedTransaction2IssueEnum {
  PAYEEBLOCKEDTRANSACTION = 'PAYEE_BLOCKED_TRANSACTION',
}

/**
 * Schema for PayeeBlockedTransaction2IssueEnum
 */
export const payeeBlockedTransaction2IssueEnumSchema: Schema<PayeeBlockedTransaction2IssueEnum> = stringEnum(PayeeBlockedTransaction2IssueEnum);
