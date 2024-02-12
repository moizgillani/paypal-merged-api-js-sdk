/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RefundReasonEnum
 */
export enum RefundReasonEnum {
  ECHECK = 'ECHECK',
}

/**
 * Schema for RefundReasonEnum
 */
export const refundReasonEnumSchema: Schema<RefundReasonEnum> = stringEnum(RefundReasonEnum);
