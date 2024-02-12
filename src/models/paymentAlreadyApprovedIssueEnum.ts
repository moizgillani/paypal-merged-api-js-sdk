/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentAlreadyApprovedIssueEnum
 */
export enum PaymentAlreadyApprovedIssueEnum {
  PAYMENTALREADYAPPROVED = 'PAYMENT_ALREADY_APPROVED',
}

/**
 * Schema for PaymentAlreadyApprovedIssueEnum
 */
export const paymentAlreadyApprovedIssueEnumSchema: Schema<PaymentAlreadyApprovedIssueEnum> = stringEnum(PaymentAlreadyApprovedIssueEnum);
