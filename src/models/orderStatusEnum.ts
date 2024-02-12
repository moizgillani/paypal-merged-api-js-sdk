/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderStatusEnum
 */
export enum OrderStatusEnum {
  CREATED = 'CREATED',
  SAVED = 'SAVED',
  APPROVED = 'APPROVED',
  VOIDED = 'VOIDED',
  COMPLETED = 'COMPLETED',
  PAYERACTIONREQUIRED = 'PAYER_ACTION_REQUIRED',
}

/**
 * Schema for OrderStatusEnum
 */
export const orderStatusEnumSchema: Schema<OrderStatusEnum> = stringEnum(OrderStatusEnum);
