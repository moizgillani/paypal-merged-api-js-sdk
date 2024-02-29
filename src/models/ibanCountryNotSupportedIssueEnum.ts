/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IbanCountryNotSupportedIssueEnum
 */
export enum IbanCountryNotSupportedIssueEnum {
  IBANCOUNTRYNOTSUPPORTED = 'IBAN_COUNTRY_NOT_SUPPORTED',
}

/**
 * Schema for IbanCountryNotSupportedIssueEnum
 */
export const ibanCountryNotSupportedIssueEnumSchema: Schema<IbanCountryNotSupportedIssueEnum> = stringEnum(IbanCountryNotSupportedIssueEnum);
