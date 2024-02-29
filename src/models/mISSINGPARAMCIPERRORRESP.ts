/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ReqParamCustInitPayDescEnum,
  reqParamCustInitPayDescEnumSchema,
} from './reqParamCustInitPayDescEnum';
import {
  RequiredParamForCustInitiatedPaymentIssueEnum,
  requiredParamForCustInitiatedPaymentIssueEnumSchema,
} from './requiredParamForCustInitiatedPaymentIssueEnum';

export interface MISSINGPARAMCIPERRORRESP {
  issue?: RequiredParamForCustInitiatedPaymentIssueEnum;
  description?: ReqParamCustInitPayDescEnum;
}

export const mISSINGPARAMCIPERRORRESPSchema: Schema<MISSINGPARAMCIPERRORRESP> = object(
  {
    issue: [
      'issue',
      optional(requiredParamForCustInitiatedPaymentIssueEnumSchema),
    ],
    description: ['description', optional(reqParamCustInitPayDescEnumSchema)],
  }
);
