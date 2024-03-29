/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidSecurityCodeLength3DescriptionEnum
 */
export enum InvalidSecurityCodeLength3DescriptionEnum {
  EnumTheSecurityCodeLengthIsInvalidForTheSpecifiedCardBrand = 'The security_code length is invalid for the specified card brand.',
}

/**
 * Schema for InvalidSecurityCodeLength3DescriptionEnum
 */
export const invalidSecurityCodeLength3DescriptionEnumSchema: Schema<InvalidSecurityCodeLength3DescriptionEnum> = stringEnum(InvalidSecurityCodeLength3DescriptionEnum);
