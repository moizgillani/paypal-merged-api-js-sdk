/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidPickupAddressIssueEnum
 */
export enum InvalidPickupAddressIssueEnum {
  INVALIDPICKUPADDRESS = 'INVALID_PICKUP_ADDRESS',
}

/**
 * Schema for InvalidPickupAddressIssueEnum
 */
export const invalidPickupAddressIssueEnumSchema: Schema<InvalidPickupAddressIssueEnum> = stringEnum(InvalidPickupAddressIssueEnum);
