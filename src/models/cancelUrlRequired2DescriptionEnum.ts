/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CancelUrlRequired2DescriptionEnum
 */
export enum CancelUrlRequired2DescriptionEnum {
  EnumTheCancelUrlIsRequiredWhenAttemptingToVaultThisSource = 'The cancel url is required when attempting to vault this source.',
}

/**
 * Schema for CancelUrlRequired2DescriptionEnum
 */
export const cancelUrlRequired2DescriptionEnumSchema: Schema<CancelUrlRequired2DescriptionEnum> = stringEnum(CancelUrlRequired2DescriptionEnum);
