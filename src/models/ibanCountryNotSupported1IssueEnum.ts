/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IbanCountryNotSupported1IssueEnum
 */
export enum IbanCountryNotSupported1IssueEnum {
  IBANCOUNTRYNOTSUPPORTED = 'IBAN_COUNTRY_NOT_SUPPORTED',
}

/**
 * Schema for IbanCountryNotSupported1IssueEnum
 */
export const ibanCountryNotSupported1IssueEnumSchema: Schema<IbanCountryNotSupported1IssueEnum> = stringEnum(IbanCountryNotSupported1IssueEnum);
