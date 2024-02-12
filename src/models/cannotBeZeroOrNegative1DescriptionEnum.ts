/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CannotBeZeroOrNegative1DescriptionEnum
 */
export enum CannotBeZeroOrNegative1DescriptionEnum {
  EnumMustBeGreaterThanZeroIfTheCurrencySupportsDecimalsOnlyTwoDecimalPlacePrecisionIsSupported = 'Must be greater than zero. If the currency supports decimals, only two decimal place precision is supported.',
}

/**
 * Schema for CannotBeZeroOrNegative1DescriptionEnum
 */
export const cannotBeZeroOrNegative1DescriptionEnumSchema: Schema<CannotBeZeroOrNegative1DescriptionEnum> = stringEnum(CannotBeZeroOrNegative1DescriptionEnum);