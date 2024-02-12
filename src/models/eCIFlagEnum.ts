/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ECIFlagEnum
 */
export enum ECIFlagEnum {
  MASTERCARDNON3DSECURETRANSACTION = 'MASTERCARD_NON_3D_SECURE_TRANSACTION',
  MASTERCARDATTEMPTEDAUTHENTICATIONTRANSACTION = 'MASTERCARD_ATTEMPTED_AUTHENTICATION_TRANSACTION',
  MASTERCARDFULLYAUTHENTICATEDTRANSACTION = 'MASTERCARD_FULLY_AUTHENTICATED_TRANSACTION',
  FULLYAUTHENTICATEDTRANSACTION = 'FULLY_AUTHENTICATED_TRANSACTION',
  ATTEMPTEDAUTHENTICATIONTRANSACTION = 'ATTEMPTED_AUTHENTICATION_TRANSACTION',
  NON3DSECURETRANSACTION = 'NON_3D_SECURE_TRANSACTION',
}

/**
 * Schema for ECIFlagEnum
 */
export const eCIFlagEnumSchema: Schema<ECIFlagEnum> = stringEnum(ECIFlagEnum);
