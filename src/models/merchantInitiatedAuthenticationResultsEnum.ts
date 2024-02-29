/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MerchantInitiatedAuthenticationResultsEnum
 */
export enum MerchantInitiatedAuthenticationResultsEnum {
  MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS = 'MERCHANT_INITIATED_WITH_AUTHENTICATION_RESULTS',
}

/**
 * Schema for MerchantInitiatedAuthenticationResultsEnum
 */
export const merchantInitiatedAuthenticationResultsEnumSchema: Schema<MerchantInitiatedAuthenticationResultsEnum> = stringEnum(MerchantInitiatedAuthenticationResultsEnum);
