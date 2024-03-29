/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayeeBlockedTransactionIssueEnum
 */
export enum PayeeBlockedTransactionIssueEnum {
  PAYEEBLOCKEDTRANSACTION = 'PAYEE_BLOCKED_TRANSACTION',
}

/**
 * Schema for PayeeBlockedTransactionIssueEnum
 */
export const payeeBlockedTransactionIssueEnumSchema: Schema<PayeeBlockedTransactionIssueEnum> = stringEnum(PayeeBlockedTransactionIssueEnum);
