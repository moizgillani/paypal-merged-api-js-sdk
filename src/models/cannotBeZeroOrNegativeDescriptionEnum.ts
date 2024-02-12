/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CannotBeZeroOrNegativeDescriptionEnum
 */
export enum CannotBeZeroOrNegativeDescriptionEnum {
  EnumMustBeGreaterThanZeroIfTheCurrencySupportsDecimalsOnlyTwoDecimalPlacePrecisionIsSupported = 'Must be greater than zero. If the currency supports decimals, only two decimal place precision is supported.',
}

/**
 * Schema for CannotBeZeroOrNegativeDescriptionEnum
 */
export const cannotBeZeroOrNegativeDescriptionEnumSchema: Schema<CannotBeZeroOrNegativeDescriptionEnum> = stringEnum(CannotBeZeroOrNegativeDescriptionEnum);