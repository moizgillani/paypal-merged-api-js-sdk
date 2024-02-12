/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SaveOrderNotSupportedDescriptionEnum
 */
export enum SaveOrderNotSupportedDescriptionEnum {
  EnumTheAPICallerAccountIsSetupInAWayThatDoesNotAllowItToBeUsedForSavingTheOrderThisFunctionalityIsNotAvailableForPayPalCommercePlatformForPlatformsMarketplaces = 'The API caller account is setup in a way that does not allow it to be used for saving the order. This functionality is not available for PayPal Commerce Platform for Platforms & Marketplaces.',
}

/**
 * Schema for SaveOrderNotSupportedDescriptionEnum
 */
export const saveOrderNotSupportedDescriptionEnumSchema: Schema<SaveOrderNotSupportedDescriptionEnum> = stringEnum(SaveOrderNotSupportedDescriptionEnum);