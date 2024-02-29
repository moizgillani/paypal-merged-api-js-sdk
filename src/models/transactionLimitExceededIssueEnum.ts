/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionLimitExceededIssueEnum
 */
export enum TransactionLimitExceededIssueEnum {
  TRANSACTIONLIMITEXCEEDED = 'TRANSACTION_LIMIT_EXCEEDED',
}

/**
 * Schema for TransactionLimitExceededIssueEnum
 */
export const transactionLimitExceededIssueEnumSchema: Schema<TransactionLimitExceededIssueEnum> = stringEnum(TransactionLimitExceededIssueEnum);
