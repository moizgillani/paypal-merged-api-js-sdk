/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardExpiryRequired1IssueEnum
 */
export enum CardExpiryRequired1IssueEnum {
  CARDEXPIRYREQUIRED = 'CARD_EXPIRY_REQUIRED',
}

/**
 * Schema for CardExpiryRequired1IssueEnum
 */
export const cardExpiryRequired1IssueEnumSchema: Schema<CardExpiryRequired1IssueEnum> = stringEnum(CardExpiryRequired1IssueEnum);