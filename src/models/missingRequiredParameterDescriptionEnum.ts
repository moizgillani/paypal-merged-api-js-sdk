/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MissingRequiredParameterDescriptionEnum
 */
export enum MissingRequiredParameterDescriptionEnum {
  EnumARequiredParameterIsMissing = 'A required parameter is missing.',
}

/**
 * Schema for MissingRequiredParameterDescriptionEnum
 */
export const missingRequiredParameterDescriptionEnumSchema: Schema<MissingRequiredParameterDescriptionEnum> = stringEnum(MissingRequiredParameterDescriptionEnum);