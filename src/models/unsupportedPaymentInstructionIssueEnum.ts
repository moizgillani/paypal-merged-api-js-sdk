/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UnsupportedPaymentInstructionIssueEnum
 */
export enum UnsupportedPaymentInstructionIssueEnum {
  UNSUPPORTEDPAYMENTINSTRUCTION = 'UNSUPPORTED_PAYMENT_INSTRUCTION',
}

/**
 * Schema for UnsupportedPaymentInstructionIssueEnum
 */
export const unsupportedPaymentInstructionIssueEnumSchema: Schema<UnsupportedPaymentInstructionIssueEnum> = stringEnum(UnsupportedPaymentInstructionIssueEnum);
