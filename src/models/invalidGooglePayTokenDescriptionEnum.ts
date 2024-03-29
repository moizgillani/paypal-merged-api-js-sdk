/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidGooglePayTokenDescriptionEnum
 */
export enum InvalidGooglePayTokenDescriptionEnum {
  EnumTheGooglePayTokenIsInvalidPayPalWasNotAbleToDecryptTheGooglepayTokenOrPayPalWasNotAbleToFindTheNecessaryDataInTheTokenAfterDecryption = 'The google pay token is invalid. PayPal was not able to decrypt the googlepay token or PayPal was not able to find the necessary data in the token after decryption.',
}

/**
 * Schema for InvalidGooglePayTokenDescriptionEnum
 */
export const invalidGooglePayTokenDescriptionEnumSchema: Schema<InvalidGooglePayTokenDescriptionEnum> = stringEnum(InvalidGooglePayTokenDescriptionEnum);
