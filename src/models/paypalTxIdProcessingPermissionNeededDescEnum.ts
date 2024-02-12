/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalTxIdProcessingPermissionNeededDescEnum
 */
export enum PaypalTxIdProcessingPermissionNeededDescEnum {
  EnumAPICallerIsNotEnableToProcessPaymentsUsingPaypalTransactionIdPleaseContactCustomerSupportToRequestPermissionsToProcessTransactionsWithPayPalTransactionID = 'API caller is not enable to process payments using `paypal_transaction_id`. Please contact customer support to request permissions to process transactions with PayPal transaction ID.',
}

/**
 * Schema for PaypalTxIdProcessingPermissionNeededDescEnum
 */
export const paypalTxIdProcessingPermissionNeededDescEnumSchema: Schema<PaypalTxIdProcessingPermissionNeededDescEnum> = stringEnum(PaypalTxIdProcessingPermissionNeededDescEnum);