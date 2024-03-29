/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionRefusedDescriptionEnum
 */
export enum TransactionRefusedDescriptionEnum {
  EnumTheRequestWasRefused = 'The request was refused.',
}

/**
 * Schema for TransactionRefusedDescriptionEnum
 */
export const transactionRefusedDescriptionEnumSchema: Schema<TransactionRefusedDescriptionEnum> = stringEnum(TransactionRefusedDescriptionEnum);
