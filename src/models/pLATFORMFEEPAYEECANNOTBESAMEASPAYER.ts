/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayerCannotPayThemselvesErrorEnum,
  payerCannotPayThemselvesErrorEnumSchema,
} from './payerCannotPayThemselvesErrorEnum';
import {
  PlatformFeePayeeCannotBeSameAsPayerIssueEnum,
  platformFeePayeeCannotBeSameAsPayerIssueEnumSchema,
} from './platformFeePayeeCannotBeSameAsPayerIssueEnum';

export interface PLATFORMFEEPAYEECANNOTBESAMEASPAYER {
  issue?: PlatformFeePayeeCannotBeSameAsPayerIssueEnum;
  description?: PayerCannotPayThemselvesErrorEnum;
}

export const pLATFORMFEEPAYEECANNOTBESAMEASPAYERSchema: Schema<PLATFORMFEEPAYEECANNOTBESAMEASPAYER> = object(
  {
    issue: [
      'issue',
      optional(platformFeePayeeCannotBeSameAsPayerIssueEnumSchema),
    ],
    description: [
      'description',
      optional(payerCannotPayThemselvesErrorEnumSchema),
    ],
  }
);
