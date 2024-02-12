/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalTransactionIdNotFound2IssueEnum
 */
export enum PaypalTransactionIdNotFound2IssueEnum {
  PAYPALTRANSACTIONIDNOTFOUND = 'PAYPAL_TRANSACTION_ID_NOT_FOUND',
}

/**
 * Schema for PaypalTransactionIdNotFound2IssueEnum
 */
export const paypalTransactionIdNotFound2IssueEnumSchema: Schema<PaypalTransactionIdNotFound2IssueEnum> = stringEnum(PaypalTransactionIdNotFound2IssueEnum);
