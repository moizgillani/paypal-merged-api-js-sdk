/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IbanCountryNotSupportedDescriptionEnum
 */
export enum IbanCountryNotSupportedDescriptionEnum {
  EnumCountryCodeOfIssuerBankForTheProvidedIBANIsNotSupportedForSEPADebitPayments = 'Country code of issuer bank for the provided IBAN is not supported for SEPA debit payments.',
}

/**
 * Schema for IbanCountryNotSupportedDescriptionEnum
 */
export const ibanCountryNotSupportedDescriptionEnumSchema: Schema<IbanCountryNotSupportedDescriptionEnum> = stringEnum(IbanCountryNotSupportedDescriptionEnum);
