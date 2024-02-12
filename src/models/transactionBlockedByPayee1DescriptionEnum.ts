/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionBlockedByPayee1DescriptionEnum
 */
export enum TransactionBlockedByPayee1DescriptionEnum {
  EnumTransactionBlockedByPayeesFraudProtectionSettings = 'Transaction blocked by Payee’s Fraud Protection settings.',
}

/**
 * Schema for TransactionBlockedByPayee1DescriptionEnum
 */
export const transactionBlockedByPayee1DescriptionEnumSchema: Schema<TransactionBlockedByPayee1DescriptionEnum> = stringEnum(TransactionBlockedByPayee1DescriptionEnum);
