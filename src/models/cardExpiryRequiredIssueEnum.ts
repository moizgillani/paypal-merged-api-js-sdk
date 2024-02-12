/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardExpiryRequiredIssueEnum
 */
export enum CardExpiryRequiredIssueEnum {
  CARDEXPIRYREQUIRED = 'CARD_EXPIRY_REQUIRED',
}

/**
 * Schema for CardExpiryRequiredIssueEnum
 */
export const cardExpiryRequiredIssueEnumSchema: Schema<CardExpiryRequiredIssueEnum> = stringEnum(CardExpiryRequiredIssueEnum);
