/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ExceededMaxPaymentAttemptsEnum
 */
export enum ExceededMaxPaymentAttemptsEnum {
  EnumYouHaveExceededTheMaximumNumberOfPaymentAttempts = 'You have exceeded the maximum number of payment attempts.',
}

/**
 * Schema for ExceededMaxPaymentAttemptsEnum
 */
export const exceededMaxPaymentAttemptsEnumSchema: Schema<ExceededMaxPaymentAttemptsEnum> = stringEnum(ExceededMaxPaymentAttemptsEnum);
