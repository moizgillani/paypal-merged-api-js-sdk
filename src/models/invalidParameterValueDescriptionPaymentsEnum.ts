/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidParameterValueDescriptionPaymentsEnum
 */
export enum InvalidParameterValueDescriptionPaymentsEnum {
  EnumTheValueOfAFieldIsInvalid = 'The value of a field is invalid.',
}

/**
 * Schema for InvalidParameterValueDescriptionPaymentsEnum
 */
export const invalidParameterValueDescriptionPaymentsEnumSchema: Schema<InvalidParameterValueDescriptionPaymentsEnum> = stringEnum(InvalidParameterValueDescriptionPaymentsEnum);
