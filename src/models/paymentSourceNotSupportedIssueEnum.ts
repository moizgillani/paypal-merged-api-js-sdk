/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceNotSupportedIssueEnum
 */
export enum PaymentSourceNotSupportedIssueEnum {
  PAYMENTSOURCENOTSUPPORTED = 'PAYMENT_SOURCE_NOT_SUPPORTED',
}

/**
 * Schema for PaymentSourceNotSupportedIssueEnum
 */
export const paymentSourceNotSupportedIssueEnumSchema: Schema<PaymentSourceNotSupportedIssueEnum> = stringEnum(PaymentSourceNotSupportedIssueEnum);
