/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BillingAgreementIdMismatchIssueEnum
 */
export enum BillingAgreementIdMismatchIssueEnum {
  BILLINGAGREEMENTIDMISMATCH = 'BILLING_AGREEMENT_ID_MISMATCH',
}

/**
 * Schema for BillingAgreementIdMismatchIssueEnum
 */
export const billingAgreementIdMismatchIssueEnumSchema: Schema<BillingAgreementIdMismatchIssueEnum> = stringEnum(BillingAgreementIdMismatchIssueEnum);
