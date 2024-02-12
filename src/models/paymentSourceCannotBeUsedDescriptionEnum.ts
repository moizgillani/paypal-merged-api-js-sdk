/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceCannotBeUsedDescriptionEnum
 */
export enum PaymentSourceCannotBeUsedDescriptionEnum {
  EnumTheProvidedPaymentSourceCannotBeUsedToPayForTheOrderPleaseTryAgainWithADifferentPaymentSourceByCreatingANewOrder = 'The provided payment source cannot be used to pay for the order. Please try again with a different payment source by creating a new order.',
}

/**
 * Schema for PaymentSourceCannotBeUsedDescriptionEnum
 */
export const paymentSourceCannotBeUsedDescriptionEnumSchema: Schema<PaymentSourceCannotBeUsedDescriptionEnum> = stringEnum(PaymentSourceCannotBeUsedDescriptionEnum);
