/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PreferredPaymentSourceMismatchIssueEnum
 */
export enum PreferredPaymentSourceMismatchIssueEnum {
  PREFERREDPAYMENTSOURCEMISMATCH = 'PREFERRED_PAYMENT_SOURCE_MISMATCH',
}

/**
 * Schema for PreferredPaymentSourceMismatchIssueEnum
 */
export const preferredPaymentSourceMismatchIssueEnumSchema: Schema<PreferredPaymentSourceMismatchIssueEnum> = stringEnum(PreferredPaymentSourceMismatchIssueEnum);
