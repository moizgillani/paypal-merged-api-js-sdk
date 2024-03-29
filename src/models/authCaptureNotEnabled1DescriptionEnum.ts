/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthCaptureNotEnabled1DescriptionEnum
 */
export enum AuthCaptureNotEnabled1DescriptionEnum {
  EnumAuthorizationAndCaptureFeatureIsNotEnabledForTheMerchantMakeSureThatTheRecipientOfTheFundsIsAVerifiedBusinessAccount = 'Authorization and Capture feature is not enabled for the merchant. Make sure that the recipient of the funds is a verified business account.',
}

/**
 * Schema for AuthCaptureNotEnabled1DescriptionEnum
 */
export const authCaptureNotEnabled1DescriptionEnumSchema: Schema<AuthCaptureNotEnabled1DescriptionEnum> = stringEnum(AuthCaptureNotEnabled1DescriptionEnum);
