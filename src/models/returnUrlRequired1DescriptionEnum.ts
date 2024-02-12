/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ReturnUrlRequired1DescriptionEnum
 */
export enum ReturnUrlRequired1DescriptionEnum {
  EnumTheReturnUrlIsRequiredWhenAttemptingToVaultThisSource = 'The return url is required when attempting to vault this source.',
}

/**
 * Schema for ReturnUrlRequired1DescriptionEnum
 */
export const returnUrlRequired1DescriptionEnumSchema: Schema<ReturnUrlRequired1DescriptionEnum> = stringEnum(ReturnUrlRequired1DescriptionEnum);
