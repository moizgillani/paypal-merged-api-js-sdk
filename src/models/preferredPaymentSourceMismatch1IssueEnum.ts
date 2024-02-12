/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PreferredPaymentSourceMismatch1IssueEnum
 */
export enum PreferredPaymentSourceMismatch1IssueEnum {
  PREFERREDPAYMENTSOURCEMISMATCH = 'PREFERRED_PAYMENT_SOURCE_MISMATCH',
}

/**
 * Schema for PreferredPaymentSourceMismatch1IssueEnum
 */
export const preferredPaymentSourceMismatch1IssueEnumSchema: Schema<PreferredPaymentSourceMismatch1IssueEnum> = stringEnum(PreferredPaymentSourceMismatch1IssueEnum);