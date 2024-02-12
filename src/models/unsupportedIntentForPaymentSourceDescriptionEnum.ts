/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UnsupportedIntentForPaymentSourceDescriptionEnum
 */
export enum UnsupportedIntentForPaymentSourceDescriptionEnum {
  EnumIntentAUTHORIZEIsNotSupportedForTheSpecifiedPaymentSourceOnlyIntentCAPTUREIsSupported = '`intent=AUTHORIZE` is not supported for the specified payment_source. Only `intent=CAPTURE` is supported.',
}

/**
 * Schema for UnsupportedIntentForPaymentSourceDescriptionEnum
 */
export const unsupportedIntentForPaymentSourceDescriptionEnumSchema: Schema<UnsupportedIntentForPaymentSourceDescriptionEnum> = stringEnum(UnsupportedIntentForPaymentSourceDescriptionEnum);