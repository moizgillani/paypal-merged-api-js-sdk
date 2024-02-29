/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for NotEligibleForTokenProcessing1DescriptionEnum
 */
export enum NotEligibleForTokenProcessing1DescriptionEnum {
  EnumAPICallerIsNotEnabledToProcessPaymentsWithTheSpecifiedTypeOfTokenPleaseContactCustomerSupportToRequestPermissionsToProcessTransactionsWithThisTypeOfToken = 'API caller is not enabled to process payments with the specified type of token. Please contact customer support to request permissions to process transactions with this type of token.',
}

/**
 * Schema for NotEligibleForTokenProcessing1DescriptionEnum
 */
export const notEligibleForTokenProcessing1DescriptionEnumSchema: Schema<NotEligibleForTokenProcessing1DescriptionEnum> = stringEnum(NotEligibleForTokenProcessing1DescriptionEnum);
