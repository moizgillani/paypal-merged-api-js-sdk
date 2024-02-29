/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TaxTotalRequired1DescriptionEnum
 */
export enum TaxTotalRequired1DescriptionEnum {
  EnumIfItemDetailsAreSpecifiedItemstaxTotalAndItemsquantityCorrespondingAmountbreakdowntaxTotalIsRequired = 'If item details are specified (items.tax_total and items.quantity) corresponding amount.breakdown.tax_total is required.',
}

/**
 * Schema for TaxTotalRequired1DescriptionEnum
 */
export const taxTotalRequired1DescriptionEnumSchema: Schema<TaxTotalRequired1DescriptionEnum> = stringEnum(TaxTotalRequired1DescriptionEnum);
