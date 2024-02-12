/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SetupErrorForBankDescriptionEnum
 */
export enum SetupErrorForBankDescriptionEnum {
  EnumTheAPICallerAccountSetupForBankPaymentsIsIncompleteOrIncorrectPleaseContactYourPayPalAccountManager = 'The API Caller account setup, for bank payments, is incomplete or incorrect. Please contact your PayPal account manager.',
}

/**
 * Schema for SetupErrorForBankDescriptionEnum
 */
export const setupErrorForBankDescriptionEnumSchema: Schema<SetupErrorForBankDescriptionEnum> = stringEnum(SetupErrorForBankDescriptionEnum);
