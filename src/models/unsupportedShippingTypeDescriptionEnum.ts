/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UnsupportedShippingTypeDescriptionEnum
 */
export enum UnsupportedShippingTypeDescriptionEnum {
  EnumTheProvidedShippingtypeIsOnlySupportedForApplicationContextshippingPreferenceSETPROVIDEDADDRESSOrNOSHIPPING = 'The provided `shipping.type` is only supported for `application_context.shipping_preference`=`SET_PROVIDED_ADDRESS` or `NO_SHIPPING`.',
}

/**
 * Schema for UnsupportedShippingTypeDescriptionEnum
 */
export const unsupportedShippingTypeDescriptionEnumSchema: Schema<UnsupportedShippingTypeDescriptionEnum> = stringEnum(UnsupportedShippingTypeDescriptionEnum);
