/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardNumberRequiredDescriptionEnum
 */
export enum CardNumberRequiredDescriptionEnum {
  EnumTheCardNumberIsRequiredWhenAttemptingToProcessPaymentWithCard = 'The card number is required when attempting to process payment with card.',
}

/**
 * Schema for CardNumberRequiredDescriptionEnum
 */
export const cardNumberRequiredDescriptionEnumSchema: Schema<CardNumberRequiredDescriptionEnum> = stringEnum(CardNumberRequiredDescriptionEnum);
