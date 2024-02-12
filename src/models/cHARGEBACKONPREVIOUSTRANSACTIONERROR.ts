/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CaptureWithChargebackNotUsableDescEnum,
  captureWithChargebackNotUsableDescEnumSchema,
} from './captureWithChargebackNotUsableDescEnum';
import {
  PreviousTransactionReferenceChargebackIssue1Enum,
  previousTransactionReferenceChargebackIssue1EnumSchema,
} from './previousTransactionReferenceChargebackIssue1Enum';

export interface CHARGEBACKONPREVIOUSTRANSACTIONERROR {
  issue?: PreviousTransactionReferenceChargebackIssue1Enum;
  description?: CaptureWithChargebackNotUsableDescEnum;
}

export const cHARGEBACKONPREVIOUSTRANSACTIONERRORSchema: Schema<CHARGEBACKONPREVIOUSTRANSACTIONERROR> = object(
  {
    issue: [
      'issue',
      optional(previousTransactionReferenceChargebackIssue1EnumSchema),
    ],
    description: [
      'description',
      optional(captureWithChargebackNotUsableDescEnumSchema),
    ],
  }
);