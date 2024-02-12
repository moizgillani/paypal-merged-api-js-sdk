/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidSecurityCodeLength1DescriptionEnum
 */
export enum InvalidSecurityCodeLength1DescriptionEnum {
  EnumTheSecurityCodeLengthIsInvalidForTheSpecifiedCardBrand = 'The security_code length is invalid for the specified card brand.',
}

/**
 * Schema for InvalidSecurityCodeLength1DescriptionEnum
 */
export const invalidSecurityCodeLength1DescriptionEnumSchema: Schema<InvalidSecurityCodeLength1DescriptionEnum> = stringEnum(InvalidSecurityCodeLength1DescriptionEnum);
