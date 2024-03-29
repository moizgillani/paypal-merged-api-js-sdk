/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionLimitExceeded2DescriptionEnum
 */
export enum TransactionLimitExceeded2DescriptionEnum {
  EnumTotalPaymentAmountExceededTransactionLimit = 'Total payment amount exceeded transaction limit.',
}

/**
 * Schema for TransactionLimitExceeded2DescriptionEnum
 */
export const transactionLimitExceeded2DescriptionEnumSchema: Schema<TransactionLimitExceeded2DescriptionEnum> = stringEnum(TransactionLimitExceeded2DescriptionEnum);
