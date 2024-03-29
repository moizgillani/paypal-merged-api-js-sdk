/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingAddressInvalid3DescriptionEnum
 */
export enum ShippingAddressInvalid3DescriptionEnum {
  EnumProvidedShippingAddressIsInvalid = 'Provided shipping address is invalid.',
}

/**
 * Schema for ShippingAddressInvalid3DescriptionEnum
 */
export const shippingAddressInvalid3DescriptionEnumSchema: Schema<ShippingAddressInvalid3DescriptionEnum> = stringEnum(ShippingAddressInvalid3DescriptionEnum);
