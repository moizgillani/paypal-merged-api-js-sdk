/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DecimalPrecisionDescriptionEnum
 */
export enum DecimalPrecisionDescriptionEnum {
  EnumIfTheCurrencySupportsDecimalsOnlyTwoDecimalPlacePrecisionIsSupported = 'If the currency supports decimals, only two decimal place precision is supported.',
}

/**
 * Schema for DecimalPrecisionDescriptionEnum
 */
export const decimalPrecisionDescriptionEnumSchema: Schema<DecimalPrecisionDescriptionEnum> = stringEnum(DecimalPrecisionDescriptionEnum);
