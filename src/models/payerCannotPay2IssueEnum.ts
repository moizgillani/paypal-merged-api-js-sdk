/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayerCannotPay2IssueEnum
 */
export enum PayerCannotPay2IssueEnum {
  PAYERCANNOTPAY = 'PAYER_CANNOT_PAY',
}

/**
 * Schema for PayerCannotPay2IssueEnum
 */
export const payerCannotPay2IssueEnumSchema: Schema<PayerCannotPay2IssueEnum> = stringEnum(PayerCannotPay2IssueEnum);
