/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentTypeNotSupportedForIntentIssueEnum
 */
export enum PaymentTypeNotSupportedForIntentIssueEnum {
  PAYMENTTYPENOTSUPPORTEDFORINTENT = 'PAYMENT_TYPE_NOT_SUPPORTED_FOR_INTENT',
}

/**
 * Schema for PaymentTypeNotSupportedForIntentIssueEnum
 */
export const paymentTypeNotSupportedForIntentIssueEnumSchema: Schema<PaymentTypeNotSupportedForIntentIssueEnum> = stringEnum(PaymentTypeNotSupportedForIntentIssueEnum);