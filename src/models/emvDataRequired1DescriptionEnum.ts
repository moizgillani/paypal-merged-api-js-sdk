/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EmvDataRequired1DescriptionEnum
 */
export enum EmvDataRequired1DescriptionEnum {
  EnumEMVDataIsRequiredIfAuthenticationMethodIsEMV = 'EMV Data is required if authentication method is EMV.',
}

/**
 * Schema for EmvDataRequired1DescriptionEnum
 */
export const emvDataRequired1DescriptionEnumSchema: Schema<EmvDataRequired1DescriptionEnum> = stringEnum(EmvDataRequired1DescriptionEnum);
