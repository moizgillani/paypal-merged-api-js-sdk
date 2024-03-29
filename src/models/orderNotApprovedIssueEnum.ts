/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderNotApprovedIssueEnum
 */
export enum OrderNotApprovedIssueEnum {
  ORDERNOTAPPROVED = 'ORDER_NOT_APPROVED',
}

/**
 * Schema for OrderNotApprovedIssueEnum
 */
export const orderNotApprovedIssueEnumSchema: Schema<OrderNotApprovedIssueEnum> = stringEnum(OrderNotApprovedIssueEnum);
