/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardBrandNotSupported1DescriptionEnum
 */
export enum CardBrandNotSupported1DescriptionEnum {
  EnumProcessingOfThisCardBrandIsNotSupportedPleaseUseAnotherCardToContinueWithThisTransaction = 'Processing of this card brand is not supported. Please use another card to continue with this transaction.',
}

/**
 * Schema for CardBrandNotSupported1DescriptionEnum
 */
export const cardBrandNotSupported1DescriptionEnumSchema: Schema<CardBrandNotSupported1DescriptionEnum> = stringEnum(CardBrandNotSupported1DescriptionEnum);
