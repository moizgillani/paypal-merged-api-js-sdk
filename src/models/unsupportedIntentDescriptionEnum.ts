/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UnsupportedIntentDescriptionEnum
 */
export enum UnsupportedIntentDescriptionEnum {
  EnumIntentAUTHORIZEIsNotSupportedForMultiplePurchaseUnitsOnlyIntentCAPTUREIsSupported = '`intent=AUTHORIZE` is not supported for multiple purchase units. Only `intent=CAPTURE` is supported.',
}

/**
 * Schema for UnsupportedIntentDescriptionEnum
 */
export const unsupportedIntentDescriptionEnumSchema: Schema<UnsupportedIntentDescriptionEnum> = stringEnum(UnsupportedIntentDescriptionEnum);