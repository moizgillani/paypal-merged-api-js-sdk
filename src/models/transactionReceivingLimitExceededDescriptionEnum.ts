/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionReceivingLimitExceededDescriptionEnum
 */
export enum TransactionReceivingLimitExceededDescriptionEnum {
  EnumTheTransactionExceedsTheReceiversReceivingLimit = 'The transaction exceeds the receiver\'s receiving limit.',
}

/**
 * Schema for TransactionReceivingLimitExceededDescriptionEnum
 */
export const transactionReceivingLimitExceededDescriptionEnumSchema: Schema<TransactionReceivingLimitExceededDescriptionEnum> = stringEnum(TransactionReceivingLimitExceededDescriptionEnum);
