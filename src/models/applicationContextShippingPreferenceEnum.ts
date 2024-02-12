/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ApplicationContextShippingPreferenceEnum
 */
export enum ApplicationContextShippingPreferenceEnum {
  GETFROMFILE = 'GET_FROM_FILE',
  NOSHIPPING = 'NO_SHIPPING',
  SETPROVIDEDADDRESS = 'SET_PROVIDED_ADDRESS',
}

/**
 * Schema for ApplicationContextShippingPreferenceEnum
 */
export const applicationContextShippingPreferenceEnumSchema: Schema<ApplicationContextShippingPreferenceEnum> = stringEnum(ApplicationContextShippingPreferenceEnum);
