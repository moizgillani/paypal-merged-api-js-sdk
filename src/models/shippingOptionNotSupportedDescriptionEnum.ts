/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingOptionNotSupportedDescriptionEnum
 */
export enum ShippingOptionNotSupportedDescriptionEnum {
  EnumShippingOptionsAreNotSupportedWhenShippingtypeIsSpecifiedOrWhenApplicationContextshippingPreferenceIsSetAsNOSHIPPINGOrSETPROVIDEDADDRESS = 'Shipping options are not supported when `shipping.type` is specified or when \'application_context.shipping_preference\' is set as \'NO_SHIPPING\' or \'SET_PROVIDED_ADDRESS\'.',
}

/**
 * Schema for ShippingOptionNotSupportedDescriptionEnum
 */
export const shippingOptionNotSupportedDescriptionEnumSchema: Schema<ShippingOptionNotSupportedDescriptionEnum> = stringEnum(ShippingOptionNotSupportedDescriptionEnum);
