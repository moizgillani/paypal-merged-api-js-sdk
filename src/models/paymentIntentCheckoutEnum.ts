/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentIntentCheckoutEnum
 */
export enum PaymentIntentCheckoutEnum {
  CAPTURE = 'CAPTURE',
  AUTHORIZE = 'AUTHORIZE',
}

/**
 * Schema for PaymentIntentCheckoutEnum
 */
export const paymentIntentCheckoutEnumSchema: Schema<PaymentIntentCheckoutEnum> = stringEnum(PaymentIntentCheckoutEnum);
