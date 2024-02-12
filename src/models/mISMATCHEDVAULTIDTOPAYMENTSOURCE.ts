/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MismatchedVaultIdToPaymentSourceDescriptionEnum,
  mismatchedVaultIdToPaymentSourceDescriptionEnumSchema,
} from './mismatchedVaultIdToPaymentSourceDescriptionEnum';
import {
  MismatchedVaultIdToPaymentSourceIssueEnum,
  mismatchedVaultIdToPaymentSourceIssueEnumSchema,
} from './mismatchedVaultIdToPaymentSourceIssueEnum';

export interface MISMATCHEDVAULTIDTOPAYMENTSOURCE {
  issue?: MismatchedVaultIdToPaymentSourceIssueEnum;
  description?: MismatchedVaultIdToPaymentSourceDescriptionEnum;
}

export const mISMATCHEDVAULTIDTOPAYMENTSOURCESchema: Schema<MISMATCHEDVAULTIDTOPAYMENTSOURCE> = object(
  {
    issue: ['issue', optional(mismatchedVaultIdToPaymentSourceIssueEnumSchema)],
    description: [
      'description',
      optional(mismatchedVaultIdToPaymentSourceDescriptionEnumSchema),
    ],
  }
);