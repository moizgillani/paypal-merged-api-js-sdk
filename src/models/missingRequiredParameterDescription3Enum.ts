/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MissingRequiredParameterDescription3Enum
 */
export enum MissingRequiredParameterDescription3Enum {
  EnumARequiredFieldParameterIsMissing = 'A required field / parameter is missing.',
}

/**
 * Schema for MissingRequiredParameterDescription3Enum
 */
export const missingRequiredParameterDescription3EnumSchema: Schema<MissingRequiredParameterDescription3Enum> = stringEnum(MissingRequiredParameterDescription3Enum);
