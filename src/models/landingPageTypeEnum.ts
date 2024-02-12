/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for LandingPageTypeEnum
 */
export enum LandingPageTypeEnum {
  LOGIN = 'LOGIN',
  GUESTCHECKOUT = 'GUEST_CHECKOUT',
  NOPREFERENCE = 'NO_PREFERENCE',
}

/**
 * Schema for LandingPageTypeEnum
 */
export const landingPageTypeEnumSchema: Schema<LandingPageTypeEnum> = stringEnum(LandingPageTypeEnum);