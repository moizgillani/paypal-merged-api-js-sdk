/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceMismatchIssueEnum
 */
export enum PaymentSourceMismatchIssueEnum {
  PAYMENTSOURCEMISMATCH = 'PAYMENT_SOURCE_MISMATCH',
}

/**
 * Schema for PaymentSourceMismatchIssueEnum
 */
export const paymentSourceMismatchIssueEnumSchema: Schema<PaymentSourceMismatchIssueEnum> = stringEnum(PaymentSourceMismatchIssueEnum);
