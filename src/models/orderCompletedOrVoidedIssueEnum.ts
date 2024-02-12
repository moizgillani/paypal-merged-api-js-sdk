/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderCompletedOrVoidedIssueEnum
 */
export enum OrderCompletedOrVoidedIssueEnum {
  ORDERCOMPLETEDORVOIDED = 'ORDER_COMPLETED_OR_VOIDED',
}

/**
 * Schema for OrderCompletedOrVoidedIssueEnum
 */
export const orderCompletedOrVoidedIssueEnumSchema: Schema<OrderCompletedOrVoidedIssueEnum> = stringEnum(OrderCompletedOrVoidedIssueEnum);
