/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OneOfTheParametersRequiredDescriptionEnum
 */
export enum OneOfTheParametersRequiredDescriptionEnum {
  EnumOneOrMoreFieldIsRequiredToContinueWithThisRequest = 'One or more field is required to continue with this request.',
}

/**
 * Schema for OneOfTheParametersRequiredDescriptionEnum
 */
export const oneOfTheParametersRequiredDescriptionEnumSchema: Schema<OneOfTheParametersRequiredDescriptionEnum> = stringEnum(OneOfTheParametersRequiredDescriptionEnum);
