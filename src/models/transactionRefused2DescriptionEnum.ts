/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionRefused2DescriptionEnum
 */
export enum TransactionRefused2DescriptionEnum {
  EnumTheRequestWasRefused = 'The request was refused.',
}

/**
 * Schema for TransactionRefused2DescriptionEnum
 */
export const transactionRefused2DescriptionEnumSchema: Schema<TransactionRefused2DescriptionEnum> = stringEnum(TransactionRefused2DescriptionEnum);