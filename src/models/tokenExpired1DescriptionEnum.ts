/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TokenExpired1DescriptionEnum
 */
export enum TokenExpired1DescriptionEnum {
  EnumTheTokenIsExpiredAndCannotBeUsedForPayment = 'The token is expired and cannot be used for payment.',
}

/**
 * Schema for TokenExpired1DescriptionEnum
 */
export const tokenExpired1DescriptionEnumSchema: Schema<TokenExpired1DescriptionEnum> = stringEnum(TokenExpired1DescriptionEnum);
