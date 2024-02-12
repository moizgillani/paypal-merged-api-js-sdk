/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  NotEligiblePaypalTxIdProcessingEnum,
  notEligiblePaypalTxIdProcessingEnumSchema,
} from './notEligiblePaypalTxIdProcessingEnum';
import {
  PaypalTxIdProcessingPermissionNeededEnum,
  paypalTxIdProcessingPermissionNeededEnumSchema,
} from './paypalTxIdProcessingPermissionNeededEnum';

export interface PAYPALIDERROR {
  issue?: NotEligiblePaypalTxIdProcessingEnum;
  description?: PaypalTxIdProcessingPermissionNeededEnum;
}

export const pAYPALIDERRORSchema: Schema<PAYPALIDERROR> = object({
  issue: ['issue', optional(notEligiblePaypalTxIdProcessingEnumSchema)],
  description: [
    'description',
    optional(paypalTxIdProcessingPermissionNeededEnumSchema),
  ],
});
