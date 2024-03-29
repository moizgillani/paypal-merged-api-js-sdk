/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderAlreadyCapturedIssueEnum
 */
export enum OrderAlreadyCapturedIssueEnum {
  ORDERALREADYCAPTURED = 'ORDER_ALREADY_CAPTURED',
}

/**
 * Schema for OrderAlreadyCapturedIssueEnum
 */
export const orderAlreadyCapturedIssueEnumSchema: Schema<OrderAlreadyCapturedIssueEnum> = stringEnum(OrderAlreadyCapturedIssueEnum);
