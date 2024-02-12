/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DomesticTransactionRequiredIssueEnum
 */
export enum DomesticTransactionRequiredIssueEnum {
  DOMESTICTRANSACTIONREQUIRED = 'DOMESTIC_TRANSACTION_REQUIRED',
}

/**
 * Schema for DomesticTransactionRequiredIssueEnum
 */
export const domesticTransactionRequiredIssueEnumSchema: Schema<DomesticTransactionRequiredIssueEnum> = stringEnum(DomesticTransactionRequiredIssueEnum);
