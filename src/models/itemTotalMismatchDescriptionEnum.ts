/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ItemTotalMismatchDescriptionEnum
 */
export enum ItemTotalMismatchDescriptionEnum {
  EnumShouldEqualSumOfUnitAmountQuantityAcrossAllItemsForAGivenPurchaseUnit = 'Should equal sum of (unit_amount * quantity) across all items for a given purchase_unit.',
}

/**
 * Schema for ItemTotalMismatchDescriptionEnum
 */
export const itemTotalMismatchDescriptionEnumSchema: Schema<ItemTotalMismatchDescriptionEnum> = stringEnum(ItemTotalMismatchDescriptionEnum);
