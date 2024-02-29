/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalTransactionIdNotFoundIssueEnum
 */
export enum PaypalTransactionIdNotFoundIssueEnum {
  PAYPALTRANSACTIONIDNOTFOUND = 'PAYPAL_TRANSACTION_ID_NOT_FOUND',
}

/**
 * Schema for PaypalTransactionIdNotFoundIssueEnum
 */
export const paypalTransactionIdNotFoundIssueEnumSchema: Schema<PaypalTransactionIdNotFoundIssueEnum> = stringEnum(PaypalTransactionIdNotFoundIssueEnum);
