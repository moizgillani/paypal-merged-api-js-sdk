/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UnsupportedCountryCodePaymentSourceEnum
 */
export enum UnsupportedCountryCodePaymentSourceEnum {
  EnumCountryCodeProvidedIsNotSupportedByTheProvidedPaymentSource = 'Country code provided is not supported by the provided payment source.',
}

/**
 * Schema for UnsupportedCountryCodePaymentSourceEnum
 */
export const unsupportedCountryCodePaymentSourceEnumSchema: Schema<UnsupportedCountryCodePaymentSourceEnum> = stringEnum(UnsupportedCountryCodePaymentSourceEnum);
