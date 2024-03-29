/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for NoPaymentSourceProvidedIssueEnum
 */
export enum NoPaymentSourceProvidedIssueEnum {
  NOPAYMENTSOURCEPROVIDED = 'NO_PAYMENT_SOURCE_PROVIDED',
}

/**
 * Schema for NoPaymentSourceProvidedIssueEnum
 */
export const noPaymentSourceProvidedIssueEnumSchema: Schema<NoPaymentSourceProvidedIssueEnum> = stringEnum(NoPaymentSourceProvidedIssueEnum);
