/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderCompleteOnPaymentApprovalDescriptionEnum
 */
export enum OrderCompleteOnPaymentApprovalDescriptionEnum {
  EnumAProcessingInstructionOfORDERCOMPLETEONPAYMENTAPPROVALIsRequiredForTheSpecifiedPaymentSourcePleaseReferToTheIntegrationGuideHttpsdeveloperpaypalcomdocslimitedreleasealternativepaymentmethodswithordersForMoreDetails = 'A processing_instruction of `ORDER_COMPLETE_ON_PAYMENT_APPROVAL` is required for the specified payment_source. Please refer to the integration guide https://developer.paypal.com/docs/limited-release/alternative-payment-methods-with-orders/ for more details',
}

/**
 * Schema for OrderCompleteOnPaymentApprovalDescriptionEnum
 */
export const orderCompleteOnPaymentApprovalDescriptionEnumSchema: Schema<OrderCompleteOnPaymentApprovalDescriptionEnum> = stringEnum(OrderCompleteOnPaymentApprovalDescriptionEnum);
