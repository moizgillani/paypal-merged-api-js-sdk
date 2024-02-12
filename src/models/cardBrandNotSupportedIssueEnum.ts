/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardBrandNotSupportedIssueEnum
 */
export enum CardBrandNotSupportedIssueEnum {
  CARDBRANDNOTSUPPORTED = 'CARD_BRAND_NOT_SUPPORTED',
}

/**
 * Schema for CardBrandNotSupportedIssueEnum
 */
export const cardBrandNotSupportedIssueEnumSchema: Schema<CardBrandNotSupportedIssueEnum> = stringEnum(CardBrandNotSupportedIssueEnum);