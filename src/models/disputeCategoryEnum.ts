/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DisputeCategoryEnum
 */
export enum DisputeCategoryEnum {
  ITEMNOTRECEIVED = 'ITEM_NOT_RECEIVED',
  UNAUTHORIZEDTRANSACTION = 'UNAUTHORIZED_TRANSACTION',
}

/**
 * Schema for DisputeCategoryEnum
 */
export const disputeCategoryEnumSchema: Schema<DisputeCategoryEnum> = stringEnum(DisputeCategoryEnum);
