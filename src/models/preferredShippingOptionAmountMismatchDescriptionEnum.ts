/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PreferredShippingOptionAmountMismatchDescriptionEnum
 */
export enum PreferredShippingOptionAmountMismatchDescriptionEnum {
  EnumTheAmountProvidedInThePreferredShippingOptionShouldMatchTheAmountProvidedInAmountBreakdown = 'The amount provided in the preferred shipping option should match the amount provided in amount breakdown',
}

/**
 * Schema for PreferredShippingOptionAmountMismatchDescriptionEnum
 */
export const preferredShippingOptionAmountMismatchDescriptionEnumSchema: Schema<PreferredShippingOptionAmountMismatchDescriptionEnum> = stringEnum(PreferredShippingOptionAmountMismatchDescriptionEnum);