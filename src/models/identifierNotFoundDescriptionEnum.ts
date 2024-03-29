/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IdentifierNotFoundDescriptionEnum
 */
export enum IdentifierNotFoundDescriptionEnum {
  EnumSpecifiedIdentifierWasNotFoundPleaseVerifyTheCorrectIdentifierWasUsedAndTryTheRequestAgain = 'Specified identifier was not found. Please verify the correct identifier was used and try the request again.',
}

/**
 * Schema for IdentifierNotFoundDescriptionEnum
 */
export const identifierNotFoundDescriptionEnumSchema: Schema<IdentifierNotFoundDescriptionEnum> = stringEnum(IdentifierNotFoundDescriptionEnum);
