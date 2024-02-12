/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardTypeNotSupportedIssueEnum
 */
export enum CardTypeNotSupportedIssueEnum {
  CARDTYPENOTSUPPORTED = 'CARD_TYPE_NOT_SUPPORTED',
}

/**
 * Schema for CardTypeNotSupportedIssueEnum
 */
export const cardTypeNotSupportedIssueEnumSchema: Schema<CardTypeNotSupportedIssueEnum> = stringEnum(CardTypeNotSupportedIssueEnum);