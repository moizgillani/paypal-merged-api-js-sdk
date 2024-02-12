/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  DuplicateInvoiceId2DescriptionEnum,
  duplicateInvoiceId2DescriptionEnumSchema,
} from './duplicateInvoiceId2DescriptionEnum';
import {
  DuplicateInvoiceId2IssueEnum,
  duplicateInvoiceId2IssueEnumSchema,
} from './duplicateInvoiceId2IssueEnum';

export interface DUPLICATEINVOICEIDERRORRESPONSE {
  issue?: DuplicateInvoiceId2IssueEnum;
  description?: DuplicateInvoiceId2DescriptionEnum;
}

export const dUPLICATEINVOICEIDERRORRESPONSESchema: Schema<DUPLICATEINVOICEIDERRORRESPONSE> = object(
  {
    issue: ['issue', optional(duplicateInvoiceId2IssueEnumSchema)],
    description: [
      'description',
      optional(duplicateInvoiceId2DescriptionEnumSchema),
    ],
  }
);