/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidArrayMaxItemsDescriptionEnum
 */
export enum InvalidArrayMaxItemsDescriptionEnum {
  EnumTheNumberOfItemsInAnArrayParameterIsTooLarge = 'The number of items in an array parameter is too large.',
}

/**
 * Schema for InvalidArrayMaxItemsDescriptionEnum
 */
export const invalidArrayMaxItemsDescriptionEnumSchema: Schema<InvalidArrayMaxItemsDescriptionEnum> = stringEnum(InvalidArrayMaxItemsDescriptionEnum);
