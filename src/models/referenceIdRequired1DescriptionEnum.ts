/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ReferenceIdRequired1DescriptionEnum
 */
export enum ReferenceIdRequired1DescriptionEnum {
  EnumReferenceIdIsRequiredForEachPurchaseUnitIfMultiplePurchaseUnitAreProvided = '\'reference_id\' is required for each \'purchase_unit\' if multiple \'purchase_unit\' are provided.',
}

/**
 * Schema for ReferenceIdRequired1DescriptionEnum
 */
export const referenceIdRequired1DescriptionEnumSchema: Schema<ReferenceIdRequired1DescriptionEnum> = stringEnum(ReferenceIdRequired1DescriptionEnum);
