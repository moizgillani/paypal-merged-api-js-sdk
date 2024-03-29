/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingAddressInvalidIssueEnum
 */
export enum ShippingAddressInvalidIssueEnum {
  SHIPPINGADDRESSINVALID = 'SHIPPING_ADDRESS_INVALID',
}

/**
 * Schema for ShippingAddressInvalidIssueEnum
 */
export const shippingAddressInvalidIssueEnumSchema: Schema<ShippingAddressInvalidIssueEnum> = stringEnum(ShippingAddressInvalidIssueEnum);
