/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidPlatformFeesAccount1DescriptionEnum
 */
export enum InvalidPlatformFeesAccount1DescriptionEnum {
  EnumTheSpecifiedPlatformFeesPayeeAccountIsEitherInvalidOrAccountSetupIsIncompletePleaseWorkWithYourPayPalAccountManagerToEnableThisOptionForYourAccount = 'The specified platform_fees payee account is either invalid or account setup is incomplete.Please work with your PayPal Account Manager to enable this option for your account.',
}

/**
 * Schema for InvalidPlatformFeesAccount1DescriptionEnum
 */
export const invalidPlatformFeesAccount1DescriptionEnumSchema: Schema<InvalidPlatformFeesAccount1DescriptionEnum> = stringEnum(InvalidPlatformFeesAccount1DescriptionEnum);
