/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MultiCurrencyOrder1DescriptionEnum
 */
export enum MultiCurrencyOrder1DescriptionEnum {
  EnumMultipleDifferingValuesOfCurrencyCodeAreNotSupportedEntireOrderRequestMustHaveTheSameCurrencyCode = 'Multiple differing values of currency_code are not supported. Entire Order request must have the same currency_code.',
}

/**
 * Schema for MultiCurrencyOrder1DescriptionEnum
 */
export const multiCurrencyOrder1DescriptionEnumSchema: Schema<MultiCurrencyOrder1DescriptionEnum> = stringEnum(MultiCurrencyOrder1DescriptionEnum);
