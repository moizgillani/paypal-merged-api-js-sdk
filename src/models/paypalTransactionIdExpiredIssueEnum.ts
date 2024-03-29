/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalTransactionIdExpiredIssueEnum
 */
export enum PaypalTransactionIdExpiredIssueEnum {
  PAYPALTRANSACTIONIDEXPIRED = 'PAYPAL_TRANSACTION_ID_EXPIRED',
}

/**
 * Schema for PaypalTransactionIdExpiredIssueEnum
 */
export const paypalTransactionIdExpiredIssueEnumSchema: Schema<PaypalTransactionIdExpiredIssueEnum> = stringEnum(PaypalTransactionIdExpiredIssueEnum);
