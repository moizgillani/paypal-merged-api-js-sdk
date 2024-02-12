/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceMismatch1IssueEnum
 */
export enum PaymentSourceMismatch1IssueEnum {
  PAYMENTSOURCEMISMATCH = 'PAYMENT_SOURCE_MISMATCH',
}

/**
 * Schema for PaymentSourceMismatch1IssueEnum
 */
export const paymentSourceMismatch1IssueEnumSchema: Schema<PaymentSourceMismatch1IssueEnum> = stringEnum(PaymentSourceMismatch1IssueEnum);
