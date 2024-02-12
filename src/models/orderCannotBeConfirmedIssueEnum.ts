/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderCannotBeConfirmedIssueEnum
 */
export enum OrderCannotBeConfirmedIssueEnum {
  ORDERCANNOTBECONFIRMED = 'ORDER_CANNOT_BE_CONFIRMED',
}

/**
 * Schema for OrderCannotBeConfirmedIssueEnum
 */
export const orderCannotBeConfirmedIssueEnumSchema: Schema<OrderCannotBeConfirmedIssueEnum> = stringEnum(OrderCannotBeConfirmedIssueEnum);
