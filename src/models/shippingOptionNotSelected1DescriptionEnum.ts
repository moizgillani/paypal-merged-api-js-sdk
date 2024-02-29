/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingOptionNotSelected1DescriptionEnum
 */
export enum ShippingOptionNotSelected1DescriptionEnum {
  EnumAtLeastOneOfTheShippingoptionShouldBeSetToSelectedTrue = 'At least one of the shipping.option should be set to \'selected = true\'.',
}

/**
 * Schema for ShippingOptionNotSelected1DescriptionEnum
 */
export const shippingOptionNotSelected1DescriptionEnumSchema: Schema<ShippingOptionNotSelected1DescriptionEnum> = stringEnum(ShippingOptionNotSelected1DescriptionEnum);
