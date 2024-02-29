/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidGooglePayTokenIssueEnum
 */
export enum InvalidGooglePayTokenIssueEnum {
  INVALIDGOOGLEPAYTOKEN = 'INVALID_GOOGLE_PAY_TOKEN',
}

/**
 * Schema for InvalidGooglePayTokenIssueEnum
 */
export const invalidGooglePayTokenIssueEnumSchema: Schema<InvalidGooglePayTokenIssueEnum> = stringEnum(InvalidGooglePayTokenIssueEnum);
