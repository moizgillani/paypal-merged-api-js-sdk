/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthCaptureNotEnabledDescriptionEnum
 */
export enum AuthCaptureNotEnabledDescriptionEnum {
  EnumAuthorizationAndCaptureFeatureIsNotEnabledForTheMerchantMakeSureThatTheRecipientOfTheFundsIsAVerifiedBusinessAccount = 'Authorization and Capture feature is not enabled for the merchant. Make sure that the recipient of the funds is a verified business account.',
}

/**
 * Schema for AuthCaptureNotEnabledDescriptionEnum
 */
export const authCaptureNotEnabledDescriptionEnumSchema: Schema<AuthCaptureNotEnabledDescriptionEnum> = stringEnum(AuthCaptureNotEnabledDescriptionEnum);