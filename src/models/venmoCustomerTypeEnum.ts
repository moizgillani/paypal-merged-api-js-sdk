/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VenmoCustomerTypeEnum
 */
export enum VenmoCustomerTypeEnum {
  CONSUMER = 'CONSUMER',
  BUSINESS = 'BUSINESS',
}

/**
 * Schema for VenmoCustomerTypeEnum
 */
export const venmoCustomerTypeEnumSchema: Schema<VenmoCustomerTypeEnum> = stringEnum(VenmoCustomerTypeEnum);
