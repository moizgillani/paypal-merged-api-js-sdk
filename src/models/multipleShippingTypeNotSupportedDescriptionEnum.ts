/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MultipleShippingTypeNotSupportedDescriptionEnum
 */
export enum MultipleShippingTypeNotSupportedDescriptionEnum {
  EnumDifferentShippingtypeAreNotSupportedAcrossPurchaseUnits = 'Different `shipping.type` are not supported across purchase units.',
}

/**
 * Schema for MultipleShippingTypeNotSupportedDescriptionEnum
 */
export const multipleShippingTypeNotSupportedDescriptionEnumSchema: Schema<MultipleShippingTypeNotSupportedDescriptionEnum> = stringEnum(MultipleShippingTypeNotSupportedDescriptionEnum);