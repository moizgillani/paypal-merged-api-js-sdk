/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PlatformFeePayeeCannotBeSameAsPayerIssueEnum
 */
export enum PlatformFeePayeeCannotBeSameAsPayerIssueEnum {
  PLATFORMFEEPAYEECANNOTBESAMEASPAYER = 'PLATFORM_FEE_PAYEE_CANNOT_BE_SAME_AS_PAYER',
}

/**
 * Schema for PlatformFeePayeeCannotBeSameAsPayerIssueEnum
 */
export const platformFeePayeeCannotBeSameAsPayerIssueEnumSchema: Schema<PlatformFeePayeeCannotBeSameAsPayerIssueEnum> = stringEnum(PlatformFeePayeeCannotBeSameAsPayerIssueEnum);