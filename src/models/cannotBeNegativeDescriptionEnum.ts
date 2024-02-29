/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CannotBeNegativeDescriptionEnum
 */
export enum CannotBeNegativeDescriptionEnum {
  EnumMustBeGreaterThanOrEqualTo0IfTheCurrencySupportsDecimalsOnlyTwoDecimalPlacePrecisionIsSupported = 'Must be greater than or equal to 0. If the currency supports decimals, only two decimal place precision is supported.',
}

/**
 * Schema for CannotBeNegativeDescriptionEnum
 */
export const cannotBeNegativeDescriptionEnumSchema: Schema<CannotBeNegativeDescriptionEnum> = stringEnum(CannotBeNegativeDescriptionEnum);
