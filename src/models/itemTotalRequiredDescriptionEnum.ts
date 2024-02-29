/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ItemTotalRequiredDescriptionEnum
 */
export enum ItemTotalRequiredDescriptionEnum {
  EnumIfItemDetailsAreSpecifiedItemsunitAmountAndItemsquantityCorrespondingAmountbreakdownitemTotalIsRequired = 'If item details are specified (items.unit_amount and items.quantity) corresponding amount.breakdown.item_total is required.',
}

/**
 * Schema for ItemTotalRequiredDescriptionEnum
 */
export const itemTotalRequiredDescriptionEnumSchema: Schema<ItemTotalRequiredDescriptionEnum> = stringEnum(ItemTotalRequiredDescriptionEnum);
