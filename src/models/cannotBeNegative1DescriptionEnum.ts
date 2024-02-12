/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CannotBeNegative1DescriptionEnum
 */
export enum CannotBeNegative1DescriptionEnum {
  EnumMustBeGreaterThanOrEqualTo0IfTheCurrencySupportsDecimalsOnlyTwoDecimalPlacePrecisionIsSupported = 'Must be greater than or equal to 0. If the currency supports decimals, only two decimal place precision is supported.',
}

/**
 * Schema for CannotBeNegative1DescriptionEnum
 */
export const cannotBeNegative1DescriptionEnumSchema: Schema<CannotBeNegative1DescriptionEnum> = stringEnum(CannotBeNegative1DescriptionEnum);
