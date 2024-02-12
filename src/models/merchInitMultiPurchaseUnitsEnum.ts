/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MerchInitMultiPurchaseUnitsEnum
 */
export enum MerchInitMultiPurchaseUnitsEnum {
  MERCHANTINITIATEDWITHMULTIPLEPURCHASEUNITS = 'MERCHANT_INITIATED_WITH_MULTIPLE_PURCHASE_UNITS',
}

/**
 * Schema for MerchInitMultiPurchaseUnitsEnum
 */
export const merchInitMultiPurchaseUnitsEnumSchema: Schema<MerchInitMultiPurchaseUnitsEnum> = stringEnum(MerchInitMultiPurchaseUnitsEnum);
