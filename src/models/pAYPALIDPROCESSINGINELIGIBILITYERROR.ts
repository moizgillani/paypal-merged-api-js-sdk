/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  NotEligiblePaypalTransactionIdProcessingEnum,
  notEligiblePaypalTransactionIdProcessingEnumSchema,
} from './notEligiblePaypalTransactionIdProcessingEnum';
import {
  PaypalTransactionIdProcessingPermissionErrorEnum,
  paypalTransactionIdProcessingPermissionErrorEnumSchema,
} from './paypalTransactionIdProcessingPermissionErrorEnum';

export interface PAYPALIDPROCESSINGINELIGIBILITYERROR {
  issue?: NotEligiblePaypalTransactionIdProcessingEnum;
  description?: PaypalTransactionIdProcessingPermissionErrorEnum;
}

export const pAYPALIDPROCESSINGINELIGIBILITYERRORSchema: Schema<PAYPALIDPROCESSINGINELIGIBILITYERROR> = object(
  {
    issue: [
      'issue',
      optional(notEligiblePaypalTransactionIdProcessingEnumSchema),
    ],
    description: [
      'description',
      optional(paypalTransactionIdProcessingPermissionErrorEnumSchema),
    ],
  }
);
