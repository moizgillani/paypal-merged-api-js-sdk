/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BillingAgreementNotFound1DescriptionEnum
 */
export enum BillingAgreementNotFound1DescriptionEnum {
  EnumTheRequestedBillingAgreementTokenWasNotFound = 'The requested Billing Agreement token was not found.',
}

/**
 * Schema for BillingAgreementNotFound1DescriptionEnum
 */
export const billingAgreementNotFound1DescriptionEnumSchema: Schema<BillingAgreementNotFound1DescriptionEnum> = stringEnum(BillingAgreementNotFound1DescriptionEnum);
