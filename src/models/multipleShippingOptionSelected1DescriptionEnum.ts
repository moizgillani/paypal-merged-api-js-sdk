/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MultipleShippingOptionSelected1DescriptionEnum
 */
export enum MultipleShippingOptionSelected1DescriptionEnum {
  EnumOnlyOneShippingoptionCanBeSetToSelectedTrue = 'Only one shipping.option can be set to \'selected = true\'.',
}

/**
 * Schema for MultipleShippingOptionSelected1DescriptionEnum
 */
export const multipleShippingOptionSelected1DescriptionEnumSchema: Schema<MultipleShippingOptionSelected1DescriptionEnum> = stringEnum(MultipleShippingOptionSelected1DescriptionEnum);
