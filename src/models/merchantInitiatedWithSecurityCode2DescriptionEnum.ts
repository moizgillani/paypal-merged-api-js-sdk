/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MerchantInitiatedWithSecurityCode2DescriptionEnum
 */
export enum MerchantInitiatedWithSecurityCode2DescriptionEnum {
  EnumStoredPaymentSourcepaymentInitiatorMERCHANTIsNotSupportedIfPaymentSourcecardsecurityCodeIsPresentInTheOrderSecurityCodeCanBePresentInTheOrderOnlyWhenCustomerIsThePaymentInitiatorItIsSemanticallyIncorrectToPerformAMerchantInitiatedPaymentWithSecurityCodeIsTheOrder = '`stored_payment_source.payment_initiator` = `MERCHANT` is not supported if `payment_source.card.security_code` is present in the order. `security_code` can be present in the order only when customer is the payment initiator. It is semantically incorrect to perform a merchant initiated payment with `security_code` is the order.',
}

/**
 * Schema for MerchantInitiatedWithSecurityCode2DescriptionEnum
 */
export const merchantInitiatedWithSecurityCode2DescriptionEnumSchema: Schema<MerchantInitiatedWithSecurityCode2DescriptionEnum> = stringEnum(MerchantInitiatedWithSecurityCode2DescriptionEnum);
