/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionLimitExceeded1DescriptionEnum
 */
export enum TransactionLimitExceeded1DescriptionEnum {
  EnumTotalPaymentAmountExceededTransactionLimit = 'Total payment amount exceeded transaction limit.',
}

/**
 * Schema for TransactionLimitExceeded1DescriptionEnum
 */
export const transactionLimitExceeded1DescriptionEnumSchema: Schema<TransactionLimitExceeded1DescriptionEnum> = stringEnum(TransactionLimitExceeded1DescriptionEnum);