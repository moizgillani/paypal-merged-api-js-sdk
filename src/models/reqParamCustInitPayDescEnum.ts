/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ReqParamCustInitPayDescEnum
 */
export enum ReqParamCustInitPayDescEnum {
  EnumThisParameterIsRequiredWhenTheCustomerIsPresentIfTheCustomerIsNotPresentIndicateSoBySendingPaymentInitiatorMERCHANTForDetailsSeeAHrefhttpsdeveloperpaypalcomdocsapiordersv2definitioncardStoredCredentialStoredCredentiala = 'This parameter is required when the customer is present. If the customer is not present, indicate so by sending payment_initiator=`MERCHANT`. For details, see <a href="https://developer.paypal.com/docs/api/orders/v2/#definition-card_stored_credential">Stored Credential</a>.',
}

/**
 * Schema for ReqParamCustInitPayDescEnum
 */
export const reqParamCustInitPayDescEnumSchema: Schema<ReqParamCustInitPayDescEnum> = stringEnum(ReqParamCustInitPayDescEnum);