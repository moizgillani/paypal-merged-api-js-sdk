/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BillingAddressInvalidDescriptionEnum
 */
export enum BillingAddressInvalidDescriptionEnum {
  EnumProvidedBillingAddressIsInvalid = 'Provided billing address is invalid.',
}

/**
 * Schema for BillingAddressInvalidDescriptionEnum
 */
export const billingAddressInvalidDescriptionEnumSchema: Schema<BillingAddressInvalidDescriptionEnum> = stringEnum(BillingAddressInvalidDescriptionEnum);
