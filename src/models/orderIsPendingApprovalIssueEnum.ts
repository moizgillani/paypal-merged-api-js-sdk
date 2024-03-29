/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderIsPendingApprovalIssueEnum
 */
export enum OrderIsPendingApprovalIssueEnum {
  ORDERISPENDINGAPPROVAL = 'ORDER_IS_PENDING_APPROVAL',
}

/**
 * Schema for OrderIsPendingApprovalIssueEnum
 */
export const orderIsPendingApprovalIssueEnumSchema: Schema<OrderIsPendingApprovalIssueEnum> = stringEnum(OrderIsPendingApprovalIssueEnum);
