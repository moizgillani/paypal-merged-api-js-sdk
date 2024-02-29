/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalRequestIdRequiredDescriptionEnum
 */
export enum PaypalRequestIdRequiredDescriptionEnum {
  EnumAPayPalRequestIdIsRequiredIfYouAreTryingToProcessPaymentForAnOrderPleaseSpecifyAPayPalRequestIdOrCreateTheOrderWithoutAPaymentSourceSpecified = 'A PayPal-Request-Id is required if you are trying to process payment for an Order. Please specify a PayPal-Request-Id or Create the Order without a \'payment_source\' specified.',
}

/**
 * Schema for PaypalRequestIdRequiredDescriptionEnum
 */
export const paypalRequestIdRequiredDescriptionEnumSchema: Schema<PaypalRequestIdRequiredDescriptionEnum> = stringEnum(PaypalRequestIdRequiredDescriptionEnum);
