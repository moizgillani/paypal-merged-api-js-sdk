/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayeePricingTierIdNotEnabledIssueEnum
 */
export enum PayeePricingTierIdNotEnabledIssueEnum {
  PAYEEPRICINGTIERIDNOTENABLED = 'PAYEE_PRICING_TIER_ID_NOT_ENABLED',
}

/**
 * Schema for PayeePricingTierIdNotEnabledIssueEnum
 */
export const payeePricingTierIdNotEnabledIssueEnumSchema: Schema<PayeePricingTierIdNotEnabledIssueEnum> = stringEnum(PayeePricingTierIdNotEnabledIssueEnum);