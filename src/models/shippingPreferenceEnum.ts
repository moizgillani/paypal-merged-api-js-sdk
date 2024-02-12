/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingPreferenceEnum
 */
export enum ShippingPreferenceEnum {
  GETFROMFILE = 'GET_FROM_FILE',
  NOSHIPPING = 'NO_SHIPPING',
  SETPROVIDEDADDRESS = 'SET_PROVIDED_ADDRESS',
}

/**
 * Schema for ShippingPreferenceEnum
 */
export const shippingPreferenceEnumSchema: Schema<ShippingPreferenceEnum> = stringEnum(ShippingPreferenceEnum);
