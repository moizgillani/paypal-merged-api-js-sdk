/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MissingCryptogram1DescriptionEnum
 */
export enum MissingCryptogram1DescriptionEnum {
  EnumCryptogramIsMandatoryForAnyCustomerInitiatedNetworkTokenTransactions = 'Cryptogram is mandatory for any customer initiated network token transactions.',
}

/**
 * Schema for MissingCryptogram1DescriptionEnum
 */
export const missingCryptogram1DescriptionEnumSchema: Schema<MissingCryptogram1DescriptionEnum> = stringEnum(MissingCryptogram1DescriptionEnum);