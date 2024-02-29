/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceDeclinedByProcessor1DescriptionEnum
 */
export enum PaymentSourceDeclinedByProcessor1DescriptionEnum {
  EnumTheProvidedPaymentSourceIsDeclinedByTheProcessorPleaseTryAgainWithADifferentPaymentSourceByCreatingANewOrder = 'The provided payment source is declined by the processor. Please try again with a different payment source by creating a new order.',
}

/**
 * Schema for PaymentSourceDeclinedByProcessor1DescriptionEnum
 */
export const paymentSourceDeclinedByProcessor1DescriptionEnumSchema: Schema<PaymentSourceDeclinedByProcessor1DescriptionEnum> = stringEnum(PaymentSourceDeclinedByProcessor1DescriptionEnum);
