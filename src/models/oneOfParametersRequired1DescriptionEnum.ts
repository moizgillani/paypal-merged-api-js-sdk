/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OneOfParametersRequired1DescriptionEnum
 */
export enum OneOfParametersRequired1DescriptionEnum {
  EnumOneOrMoreFieldIsRequiredToContinueWithThisRequest = 'One or more field is required to continue with this request.',
}

/**
 * Schema for OneOfParametersRequired1DescriptionEnum
 */
export const oneOfParametersRequired1DescriptionEnumSchema: Schema<OneOfParametersRequired1DescriptionEnum> = stringEnum(OneOfParametersRequired1DescriptionEnum);
