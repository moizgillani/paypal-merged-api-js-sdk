/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MalformedRequestJsonDescriptionEnum
 */
export enum MalformedRequestJsonDescriptionEnum {
  EnumTheRequestJSONIsNotWellFormed = 'The request JSON is not well formed.',
}

/**
 * Schema for MalformedRequestJsonDescriptionEnum
 */
export const malformedRequestJsonDescriptionEnumSchema: Schema<MalformedRequestJsonDescriptionEnum> = stringEnum(MalformedRequestJsonDescriptionEnum);
