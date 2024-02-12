/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CustomerInitiatedPaymentRequiredParamEnum,
  customerInitiatedPaymentRequiredParamEnumSchema,
} from './customerInitiatedPaymentRequiredParamEnum';
import {
  ReqParamCustPresentInitiatorEnum,
  reqParamCustPresentInitiatorEnumSchema,
} from './reqParamCustPresentInitiatorEnum';

export interface MISSINGPAYMENTPARAMERROR {
  issue?: CustomerInitiatedPaymentRequiredParamEnum;
  description?: ReqParamCustPresentInitiatorEnum;
}

export const mISSINGPAYMENTPARAMERRORSchema: Schema<MISSINGPAYMENTPARAMERROR> = object(
  {
    issue: ['issue', optional(customerInitiatedPaymentRequiredParamEnumSchema)],
    description: [
      'description',
      optional(reqParamCustPresentInitiatorEnumSchema),
    ],
  }
);