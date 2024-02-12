/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalTransactionIdNotFound2DescriptionEnum
 */
export enum PaypalTransactionIdNotFound2DescriptionEnum {
  EnumSpecifiedPaypalTransactionIdWasNotFoundVerifyTheValueAndTryTheRequestAgain = 'Specified `paypal_transaction_id` was not found. Verify the value and try the request again.',
}

/**
 * Schema for PaypalTransactionIdNotFound2DescriptionEnum
 */
export const paypalTransactionIdNotFound2DescriptionEnumSchema: Schema<PaypalTransactionIdNotFound2DescriptionEnum> = stringEnum(PaypalTransactionIdNotFound2DescriptionEnum);
