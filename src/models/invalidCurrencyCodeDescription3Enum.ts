/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidCurrencyCodeDescription3Enum
 */
export enum InvalidCurrencyCodeDescription3Enum {
  EnumCurrencyCodeIsInvalidOrIsNotCurrentlySupportedPleaseReferHttpsdeveloperpaypalcomdocsapireferencecurrencycodesForListOfSupportedCurrencyCodes = 'Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/docs/api/reference/currency-codes/ for list of supported currency codes.',
}

/**
 * Schema for InvalidCurrencyCodeDescription3Enum
 */
export const invalidCurrencyCodeDescription3EnumSchema: Schema<InvalidCurrencyCodeDescription3Enum> = stringEnum(InvalidCurrencyCodeDescription3Enum);
