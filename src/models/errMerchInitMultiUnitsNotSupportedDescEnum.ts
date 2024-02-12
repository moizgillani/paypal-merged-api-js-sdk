/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ErrMerchInitMultiUnitsNotSupportedDescEnum
 */
export enum ErrMerchInitMultiUnitsNotSupportedDescEnum {
  EnumStoredPaymentSourcepaymentInitiatorMERCHANTIsNotSupportedIfMoreThanOnePurchaseUnitIsPresentInTheOrderMerchantInitiatedPaymentsAreNotSupportedFromOrdersWithMoreThanOnePurchaseUnitPleaseRetryTheRequestWithMultipleOrderRequestsOneForEachPurchaseUnit = '`stored_payment_source.payment_initiator` = `MERCHANT` is not supported if more than one purchase_unit is present in the Order. Merchant initiated payments are not supported from orders with more than one purchase_unit. Please retry the request with multiple Order requests (one for each purchase_unit).',
}

/**
 * Schema for ErrMerchInitMultiUnitsNotSupportedDescEnum
 */
export const errMerchInitMultiUnitsNotSupportedDescEnumSchema: Schema<ErrMerchInitMultiUnitsNotSupportedDescEnum> = stringEnum(ErrMerchInitMultiUnitsNotSupportedDescEnum);