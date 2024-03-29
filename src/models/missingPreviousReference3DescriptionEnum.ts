/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MissingPreviousReference3DescriptionEnum
 */
export enum MissingPreviousReference3DescriptionEnum {
  EnumForMerchantInitiatedNetworkTokenTransactionsEitherThePaymentSourcecardstoredCredentialpreviousNetworkTransactionReferenceOrPaymentSourcecardstoredCredentialpreviousTransactionReferenceMustBeIncludedInTheRequest = 'For Merchant initiated network token transactions, either the payment_source.card.stored_credential.previous_network_transaction_reference or payment_source.card.stored_credential.previous_transaction_reference must be included in the request.',
}

/**
 * Schema for MissingPreviousReference3DescriptionEnum
 */
export const missingPreviousReference3DescriptionEnumSchema: Schema<MissingPreviousReference3DescriptionEnum> = stringEnum(MissingPreviousReference3DescriptionEnum);
