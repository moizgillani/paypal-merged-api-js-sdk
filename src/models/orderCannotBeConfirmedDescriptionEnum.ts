/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderCannotBeConfirmedDescriptionEnum
 */
export enum OrderCannotBeConfirmedDescriptionEnum {
  EnumAnOrderWithStatusCOMPLETEDCannotBeConfirmedAgain = 'An order with status = \'COMPLETED\' cannot be confirmed again.',
}

/**
 * Schema for OrderCannotBeConfirmedDescriptionEnum
 */
export const orderCannotBeConfirmedDescriptionEnumSchema: Schema<OrderCannotBeConfirmedDescriptionEnum> = stringEnum(OrderCannotBeConfirmedDescriptionEnum);
