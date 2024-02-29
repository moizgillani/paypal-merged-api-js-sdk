/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentAlreadyApprovedDescriptionEnum
 */
export enum PaymentAlreadyApprovedDescriptionEnum {
  EnumThePaymentHasAlreadyBeenApprovedPleaseCaptureTheOrderOrCreateAndConfirmANewOrderWithThisPaymentSource = 'The payment has already been approved.  Please capture the order, or create and confirm a new order with this payment source.',
}

/**
 * Schema for PaymentAlreadyApprovedDescriptionEnum
 */
export const paymentAlreadyApprovedDescriptionEnumSchema: Schema<PaymentAlreadyApprovedDescriptionEnum> = stringEnum(PaymentAlreadyApprovedDescriptionEnum);
