/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ApplicationContextLandingPageEnum
 */
export enum ApplicationContextLandingPageEnum {
  LOGIN = 'LOGIN',
  BILLING = 'BILLING',
  NOPREFERENCE = 'NO_PREFERENCE',
}

/**
 * Schema for ApplicationContextLandingPageEnum
 */
export const applicationContextLandingPageEnumSchema: Schema<ApplicationContextLandingPageEnum> = stringEnum(ApplicationContextLandingPageEnum);
