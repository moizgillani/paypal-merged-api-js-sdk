/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for NotEligibleForTokenProcessingDescriptionEnum
 */
export enum NotEligibleForTokenProcessingDescriptionEnum {
  EnumAPICallerIsNotEnabledToProcessPaymentsWithTheSpecifiedTypeOfTokenPleaseContactCustomerSupportToRequestPermissionsToProcessTransactionsWithThisTypeOfToken = 'API caller is not enabled to process payments with the specified type of token. Please contact customer support to request permissions to process transactions with this type of token.',
}

/**
 * Schema for NotEligibleForTokenProcessingDescriptionEnum
 */
export const notEligibleForTokenProcessingDescriptionEnumSchema: Schema<NotEligibleForTokenProcessingDescriptionEnum> = stringEnum(NotEligibleForTokenProcessingDescriptionEnum);
