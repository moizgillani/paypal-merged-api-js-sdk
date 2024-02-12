/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayerAccountLockedOrClosed1DescriptionEnum
 */
export enum PayerAccountLockedOrClosed1DescriptionEnum {
  EnumThePayerAccountCannotBeUsedForThisTransaction = 'The payer account cannot be used for this transaction.',
}

/**
 * Schema for PayerAccountLockedOrClosed1DescriptionEnum
 */
export const payerAccountLockedOrClosed1DescriptionEnumSchema: Schema<PayerAccountLockedOrClosed1DescriptionEnum> = stringEnum(PayerAccountLockedOrClosed1DescriptionEnum);