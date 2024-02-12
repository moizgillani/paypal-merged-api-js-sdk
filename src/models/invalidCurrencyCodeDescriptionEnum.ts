/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidCurrencyCodeDescriptionEnum
 */
export enum InvalidCurrencyCodeDescriptionEnum {
  EnumCurrencyCodeIsInvalidOrIsNotCurrentlySupportedPleaseReferHttpsdeveloperpaypalcomapirestreferencecurrencycodesForListOfSupportedCurrencyCodes = 'Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/api/rest/reference/currency-codes/ for list of supported currency codes.',
}

/**
 * Schema for InvalidCurrencyCodeDescriptionEnum
 */
export const invalidCurrencyCodeDescriptionEnumSchema: Schema<InvalidCurrencyCodeDescriptionEnum> = stringEnum(InvalidCurrencyCodeDescriptionEnum);