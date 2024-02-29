/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthorizationCurrencyMismatchIssueEnum
 */
export enum AuthorizationCurrencyMismatchIssueEnum {
  AUTHORIZATIONCURRENCYMISMATCH = 'AUTHORIZATION_CURRENCY_MISMATCH',
}

/**
 * Schema for AuthorizationCurrencyMismatchIssueEnum
 */
export const authorizationCurrencyMismatchIssueEnumSchema: Schema<AuthorizationCurrencyMismatchIssueEnum> = stringEnum(AuthorizationCurrencyMismatchIssueEnum);
