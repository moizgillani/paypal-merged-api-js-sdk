/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidStringLengthDescriptionEnum
 */
export enum InvalidStringLengthDescriptionEnum {
  EnumTheValueOfAFieldIsEitherTooShortOrTooLong = 'The value of a field is either too short or too long',
}

/**
 * Schema for InvalidStringLengthDescriptionEnum
 */
export const invalidStringLengthDescriptionEnumSchema: Schema<InvalidStringLengthDescriptionEnum> = stringEnum(InvalidStringLengthDescriptionEnum);
