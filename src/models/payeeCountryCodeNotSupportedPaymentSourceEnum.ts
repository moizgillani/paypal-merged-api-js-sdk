/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayeeCountryCodeNotSupportedPaymentSourceEnum
 */
export enum PayeeCountryCodeNotSupportedPaymentSourceEnum {
  EnumPayeeCountryCodeIsNotSupportedByTheProvidedPaymentSource = 'Payee country code is not supported by the provided payment source.',
}

/**
 * Schema for PayeeCountryCodeNotSupportedPaymentSourceEnum
 */
export const payeeCountryCodeNotSupportedPaymentSourceEnumSchema: Schema<PayeeCountryCodeNotSupportedPaymentSourceEnum> = stringEnum(PayeeCountryCodeNotSupportedPaymentSourceEnum);
