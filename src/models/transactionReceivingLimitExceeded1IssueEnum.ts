/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionReceivingLimitExceeded1IssueEnum
 */
export enum TransactionReceivingLimitExceeded1IssueEnum {
  TRANSACTIONRECEIVINGLIMITEXCEEDED = 'TRANSACTION_RECEIVING_LIMIT_EXCEEDED',
}

/**
 * Schema for TransactionReceivingLimitExceeded1IssueEnum
 */
export const transactionReceivingLimitExceeded1IssueEnumSchema: Schema<TransactionReceivingLimitExceeded1IssueEnum> = stringEnum(TransactionReceivingLimitExceeded1IssueEnum);