/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MissingPreviousReference1DescriptionEnum
 */
export enum MissingPreviousReference1DescriptionEnum {
  EnumForMerchantInitiatedNetworkTokenTransactionsEitherThePaymentSourcecardstoredCredentialpreviousNetworkTransactionReferenceOrPaymentSourcecardstoredCredentialpreviousTransactionReferenceMustBeIncludedInTheRequest = 'For Merchant initiated network token transactions, either the payment_source.card.stored_credential.previous_network_transaction_reference or payment_source.card.stored_credential.previous_transaction_reference must be included in the request.',
}

/**
 * Schema for MissingPreviousReference1DescriptionEnum
 */
export const missingPreviousReference1DescriptionEnumSchema: Schema<MissingPreviousReference1DescriptionEnum> = stringEnum(MissingPreviousReference1DescriptionEnum);
