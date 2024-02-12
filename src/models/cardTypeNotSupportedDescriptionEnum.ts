/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardTypeNotSupportedDescriptionEnum
 */
export enum CardTypeNotSupportedDescriptionEnum {
  EnumProcessingOfThisCardTypeIsNotSupportedUseAnotherCardType = 'Processing of this card type is not supported. Use another card type.',
}

/**
 * Schema for CardTypeNotSupportedDescriptionEnum
 */
export const cardTypeNotSupportedDescriptionEnumSchema: Schema<CardTypeNotSupportedDescriptionEnum> = stringEnum(CardTypeNotSupportedDescriptionEnum);
