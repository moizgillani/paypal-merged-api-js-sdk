/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderAlreadyCompletedDescriptionEnum
 */
export enum OrderAlreadyCompletedDescriptionEnum {
  EnumTheOrderCannotBePatchedAfterItIsCompleted = 'The order cannot be patched after it is completed.',
}

/**
 * Schema for OrderAlreadyCompletedDescriptionEnum
 */
export const orderAlreadyCompletedDescriptionEnumSchema: Schema<OrderAlreadyCompletedDescriptionEnum> = stringEnum(OrderAlreadyCompletedDescriptionEnum);
