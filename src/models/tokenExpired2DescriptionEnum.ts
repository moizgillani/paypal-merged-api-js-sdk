/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TokenExpired2DescriptionEnum
 */
export enum TokenExpired2DescriptionEnum {
  EnumTheTokenIsExpiredAndCannotBeUsedForPayment = 'The token is expired and cannot be used for payment.',
}

/**
 * Schema for TokenExpired2DescriptionEnum
 */
export const tokenExpired2DescriptionEnumSchema: Schema<TokenExpired2DescriptionEnum> = stringEnum(TokenExpired2DescriptionEnum);