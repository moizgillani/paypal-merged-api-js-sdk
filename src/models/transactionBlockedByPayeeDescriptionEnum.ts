/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionBlockedByPayeeDescriptionEnum
 */
export enum TransactionBlockedByPayeeDescriptionEnum {
  EnumTransactionBlockedByPayeesFraudProtectionSettings = 'Transaction blocked by Payee’s Fraud Protection settings.',
}

/**
 * Schema for TransactionBlockedByPayeeDescriptionEnum
 */
export const transactionBlockedByPayeeDescriptionEnumSchema: Schema<TransactionBlockedByPayeeDescriptionEnum> = stringEnum(TransactionBlockedByPayeeDescriptionEnum);
