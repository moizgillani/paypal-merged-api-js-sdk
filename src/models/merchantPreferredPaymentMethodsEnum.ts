/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MerchantPreferredPaymentMethodsEnum
 */
export enum MerchantPreferredPaymentMethodsEnum {
  UNRESTRICTED = 'UNRESTRICTED',
  IMMEDIATEPAYMENTREQUIRED = 'IMMEDIATE_PAYMENT_REQUIRED',
}

/**
 * Schema for MerchantPreferredPaymentMethodsEnum
 */
export const merchantPreferredPaymentMethodsEnumSchema: Schema<MerchantPreferredPaymentMethodsEnum> = stringEnum(MerchantPreferredPaymentMethodsEnum);
