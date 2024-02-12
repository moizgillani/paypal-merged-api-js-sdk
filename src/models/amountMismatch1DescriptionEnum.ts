/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AmountMismatch1DescriptionEnum
 */
export enum AmountMismatch1DescriptionEnum {
  EnumShouldEqualItemTotalTaxTotalShippingHandlingInsuranceShippingDiscountDiscount = 'Should equal item_total + tax_total + shipping + handling + insurance - shipping_discount - discount.',
}

/**
 * Schema for AmountMismatch1DescriptionEnum
 */
export const amountMismatch1DescriptionEnumSchema: Schema<AmountMismatch1DescriptionEnum> = stringEnum(AmountMismatch1DescriptionEnum);