/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PreviousTransactionReferenceVoidedDescriptionEnum,
  previousTransactionReferenceVoidedDescriptionEnumSchema,
} from './previousTransactionReferenceVoidedDescriptionEnum';
import {
  PreviousTransactionReferenceVoidedIssueEnum,
  previousTransactionReferenceVoidedIssueEnumSchema,
} from './previousTransactionReferenceVoidedIssueEnum';

export interface PREVIOUSTRANSACTIONREFERENCEVOIDED {
  issue?: PreviousTransactionReferenceVoidedIssueEnum;
  description?: PreviousTransactionReferenceVoidedDescriptionEnum;
}

export const pREVIOUSTRANSACTIONREFERENCEVOIDEDSchema: Schema<PREVIOUSTRANSACTIONREFERENCEVOIDED> = object(
  {
    issue: [
      'issue',
      optional(previousTransactionReferenceVoidedIssueEnumSchema),
    ],
    description: [
      'description',
      optional(previousTransactionReferenceVoidedDescriptionEnumSchema),
    ],
  }
);