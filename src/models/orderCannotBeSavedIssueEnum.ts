/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderCannotBeSavedIssueEnum
 */
export enum OrderCannotBeSavedIssueEnum {
  ORDERCANNOTBESAVED = 'ORDER_CANNOT_BE_SAVED',
}

/**
 * Schema for OrderCannotBeSavedIssueEnum
 */
export const orderCannotBeSavedIssueEnumSchema: Schema<OrderCannotBeSavedIssueEnum> = stringEnum(OrderCannotBeSavedIssueEnum);
