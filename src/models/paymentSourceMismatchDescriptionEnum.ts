/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentSourceMismatchDescriptionEnum
 */
export enum PaymentSourceMismatchDescriptionEnum {
  EnumThePaymentSourceInTheRequestMustMatchThePaymentSourceUsedForTheAuthorizationOrCaptureReferencedByPreviousTransactionReferencePleaseUsePreviousTransactionReferenceWhosePaymentSourceMatchesWithThePaymentSourceSpecifiedInTheOrder = 'The `payment_source` in the request must match the `payment_source` used for the authorization or capture referenced by `previous_transaction_reference`. Please use `previous_transaction_reference` whose `payment_source` matches with the `payment_source` specified in the order.',
}

/**
 * Schema for PaymentSourceMismatchDescriptionEnum
 */
export const paymentSourceMismatchDescriptionEnumSchema: Schema<PaymentSourceMismatchDescriptionEnum> = stringEnum(PaymentSourceMismatchDescriptionEnum);