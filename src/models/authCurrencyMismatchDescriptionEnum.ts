/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthCurrencyMismatchDescriptionEnum
 */
export enum AuthCurrencyMismatchDescriptionEnum {
  EnumTheCurrencySpecifiedDuringReauthorizationShouldBeTheSameAsTheCurrencySpecifiedInTheOriginalAuthorizationPleaseCheckTheCurrencyOfTheAuthorizationForWhichYouAreTryingToReauthorizeAndTryAgain = 'The currency specified during reauthorization should be the same as the currency specified in the original authorization. Please check the currency of the authorization for which you are trying to reauthorize and try again.',
}

/**
 * Schema for AuthCurrencyMismatchDescriptionEnum
 */
export const authCurrencyMismatchDescriptionEnumSchema: Schema<AuthCurrencyMismatchDescriptionEnum> = stringEnum(AuthCurrencyMismatchDescriptionEnum);
