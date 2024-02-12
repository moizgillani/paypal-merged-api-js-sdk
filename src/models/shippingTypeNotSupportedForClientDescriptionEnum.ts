/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingTypeNotSupportedForClientDescriptionEnum
 */
export enum ShippingTypeNotSupportedForClientDescriptionEnum {
  EnumTheAPICallerAccountIsNotSetupToBeAbleToSupportAShippingtypePICKUPINPERSONThisFeatureIsOnlySupportedForAHrefhttpswwwpaypalcomusbusinessplatformsandmarketplacesPayPalCommercePlatformForPlatformsAndMarketplacesa = 'The API Caller account is not setup to be able to support a `shipping.type`=`PICKUP_IN_PERSON`. This feature is only supported for <a href="https://www.paypal.com/us/business/platforms-and-marketplaces">PayPal Commerce Platform for Platforms and Marketplaces</a>.',
}

/**
 * Schema for ShippingTypeNotSupportedForClientDescriptionEnum
 */
export const shippingTypeNotSupportedForClientDescriptionEnumSchema: Schema<ShippingTypeNotSupportedForClientDescriptionEnum> = stringEnum(ShippingTypeNotSupportedForClientDescriptionEnum);
