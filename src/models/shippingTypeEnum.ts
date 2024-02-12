/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingTypeEnum
 */
export enum ShippingTypeEnum {
  SHIPPING = 'SHIPPING',
  PICKUP = 'PICKUP',
}

/**
 * Schema for ShippingTypeEnum
 */
export const shippingTypeEnumSchema: Schema<ShippingTypeEnum> = stringEnum(ShippingTypeEnum);