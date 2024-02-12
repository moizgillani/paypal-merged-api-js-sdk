/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceInfoCannotBeVerifiedIssueEnum
 */
export enum PaymentSourceInfoCannotBeVerifiedIssueEnum {
  PAYMENTSOURCEINFOCANNOTBEVERIFIED = 'PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED',
}

/**
 * Schema for PaymentSourceInfoCannotBeVerifiedIssueEnum
 */
export const paymentSourceInfoCannotBeVerifiedIssueEnumSchema: Schema<PaymentSourceInfoCannotBeVerifiedIssueEnum> = stringEnum(PaymentSourceInfoCannotBeVerifiedIssueEnum);