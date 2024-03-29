/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for NotEligibleForPnrefProcessing1DescriptionEnum
 */
export enum NotEligibleForPnrefProcessing1DescriptionEnum {
  EnumAPICallerIsNotEnabledToProcessPaymentsWithThePnrefPleaseContactCustomerSupportToRequestPermissionsToProcessTransactionsWithPNREF = 'API caller is not enabled to process payments with the `pnref`. Please contact customer support to request permissions to process transactions with PNREF.',
}

/**
 * Schema for NotEligibleForPnrefProcessing1DescriptionEnum
 */
export const notEligibleForPnrefProcessing1DescriptionEnumSchema: Schema<NotEligibleForPnrefProcessing1DescriptionEnum> = stringEnum(NotEligibleForPnrefProcessing1DescriptionEnum);
