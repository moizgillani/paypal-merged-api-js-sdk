/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceDoesNotSupportItemCategoryEnum
 */
export enum PaymentSourceDoesNotSupportItemCategoryEnum {
  EnumTheProvidedPaymentSourceDoesNotSupportProvidedItemCategory = 'The provided payment source does not support provided item category.',
}

/**
 * Schema for PaymentSourceDoesNotSupportItemCategoryEnum
 */
export const paymentSourceDoesNotSupportItemCategoryEnumSchema: Schema<PaymentSourceDoesNotSupportItemCategoryEnum> = stringEnum(PaymentSourceDoesNotSupportItemCategoryEnum);