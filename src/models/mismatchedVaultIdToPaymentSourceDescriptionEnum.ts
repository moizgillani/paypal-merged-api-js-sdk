/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MismatchedVaultIdToPaymentSourceDescriptionEnum
 */
export enum MismatchedVaultIdToPaymentSourceDescriptionEnum {
  EnumTheVaultIdDoesNotMatchThePaymentSourceProvidedPleaseVerifyThatTheVaultIdTokenUsedRefersToTheMatchingPaymentSourceAndTryAgainForExampleAPayPalTokenCannotBePassedInTheVaultIdFieldInThePaymentSourcecardObject = 'The vault_id does not match the payment_source provided. Please verify that the vault_id token used refers to the matching payment_source and try again. For example, a PayPal token cannot be passed in the vault_id field in the payment_source.card object.',
}

/**
 * Schema for MismatchedVaultIdToPaymentSourceDescriptionEnum
 */
export const mismatchedVaultIdToPaymentSourceDescriptionEnumSchema: Schema<MismatchedVaultIdToPaymentSourceDescriptionEnum> = stringEnum(MismatchedVaultIdToPaymentSourceDescriptionEnum);
