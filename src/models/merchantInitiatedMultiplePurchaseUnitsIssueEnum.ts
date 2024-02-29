/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MerchantInitiatedMultiplePurchaseUnitsIssueEnum
 */
export enum MerchantInitiatedMultiplePurchaseUnitsIssueEnum {
  MERCHANTINITIATEDWITHMULTIPLEPURCHASEUNITS = 'MERCHANT_INITIATED_WITH_MULTIPLE_PURCHASE_UNITS',
}

/**
 * Schema for MerchantInitiatedMultiplePurchaseUnitsIssueEnum
 */
export const merchantInitiatedMultiplePurchaseUnitsIssueEnumSchema: Schema<MerchantInitiatedMultiplePurchaseUnitsIssueEnum> = stringEnum(MerchantInitiatedMultiplePurchaseUnitsIssueEnum);
