/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ItemCategoryEnum
 */
export enum ItemCategoryEnum {
  DIGITALGOODS = 'DIGITAL_GOODS',
  PHYSICALGOODS = 'PHYSICAL_GOODS',
  DONATION = 'DONATION',
}

/**
 * Schema for ItemCategoryEnum
 */
export const itemCategoryEnumSchema: Schema<ItemCategoryEnum> = stringEnum(ItemCategoryEnum);
