/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalTransactionIdNotFound1DescriptionEnum
 */
export enum PaypalTransactionIdNotFound1DescriptionEnum {
  EnumSpecifiedPaypalTransactionIdWasNotFoundVerifyTheValueAndTryTheRequestAgain = 'Specified `paypal_transaction_id` was not found. Verify the value and try the request again.',
}

/**
 * Schema for PaypalTransactionIdNotFound1DescriptionEnum
 */
export const paypalTransactionIdNotFound1DescriptionEnumSchema: Schema<PaypalTransactionIdNotFound1DescriptionEnum> = stringEnum(PaypalTransactionIdNotFound1DescriptionEnum);
