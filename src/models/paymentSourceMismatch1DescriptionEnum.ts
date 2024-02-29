/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceMismatch1DescriptionEnum
 */
export enum PaymentSourceMismatch1DescriptionEnum {
  EnumThePaymentSourceInTheRequestMustMatchThePaymentSourceUsedForTheAuthorizationOrCaptureReferencedByPreviousTransactionReferencePleaseUsePreviousTransactionReferenceWhosePaymentSourceMatchesWithThePaymentSourceSpecifiedInTheOrder = 'The `payment_source` in the request must match the `payment_source` used for the authorization or capture referenced by `previous_transaction_reference`. Please use `previous_transaction_reference` whose `payment_source` matches with the `payment_source` specified in the order.',
}

/**
 * Schema for PaymentSourceMismatch1DescriptionEnum
 */
export const paymentSourceMismatch1DescriptionEnumSchema: Schema<PaymentSourceMismatch1DescriptionEnum> = stringEnum(PaymentSourceMismatch1DescriptionEnum);
