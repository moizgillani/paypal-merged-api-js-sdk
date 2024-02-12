/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidParameterSyntaxDescriptionEnum
 */
export enum InvalidParameterSyntaxDescriptionEnum {
  EnumTheValueOfAFieldDoesNotConformToTheExpectedFormat = 'The value of a field does not conform to the expected format.',
}

/**
 * Schema for InvalidParameterSyntaxDescriptionEnum
 */
export const invalidParameterSyntaxDescriptionEnumSchema: Schema<InvalidParameterSyntaxDescriptionEnum> = stringEnum(InvalidParameterSyntaxDescriptionEnum);