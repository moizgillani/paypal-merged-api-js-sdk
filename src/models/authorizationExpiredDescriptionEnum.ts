/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthorizationExpiredDescriptionEnum
 */
export enum AuthorizationExpiredDescriptionEnum {
  EnumAnExpiredAuthorizationCannotBeCaptured = 'An expired authorization cannot be captured.',
}

/**
 * Schema for AuthorizationExpiredDescriptionEnum
 */
export const authorizationExpiredDescriptionEnumSchema: Schema<AuthorizationExpiredDescriptionEnum> = stringEnum(AuthorizationExpiredDescriptionEnum);