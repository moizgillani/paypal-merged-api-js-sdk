/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardExpiryRequired2DescriptionEnum
 */
export enum CardExpiryRequired2DescriptionEnum {
  EnumTheCardExpiryIsRequiredWhenAttemptingToProcessPaymentWithCard = 'The card expiry is required when attempting to process payment with card.',
}

/**
 * Schema for CardExpiryRequired2DescriptionEnum
 */
export const cardExpiryRequired2DescriptionEnumSchema: Schema<CardExpiryRequired2DescriptionEnum> = stringEnum(CardExpiryRequired2DescriptionEnum);
