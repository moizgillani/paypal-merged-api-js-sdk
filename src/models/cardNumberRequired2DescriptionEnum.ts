/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardNumberRequired2DescriptionEnum
 */
export enum CardNumberRequired2DescriptionEnum {
  EnumTheCardNumberIsRequiredWhenAttemptingToProcessPaymentWithCard = 'The card number is required when attempting to process payment with card.',
}

/**
 * Schema for CardNumberRequired2DescriptionEnum
 */
export const cardNumberRequired2DescriptionEnumSchema: Schema<CardNumberRequired2DescriptionEnum> = stringEnum(CardNumberRequired2DescriptionEnum);
