/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ShippingTypeNotSupportedForClientDescriptionEnum,
  shippingTypeNotSupportedForClientDescriptionEnumSchema,
} from './shippingTypeNotSupportedForClientDescriptionEnum';
import {
  ShippingTypeNotSupportedForClientIssueEnum,
  shippingTypeNotSupportedForClientIssueEnumSchema,
} from './shippingTypeNotSupportedForClientIssueEnum';

export interface SHIPPINGTYPENOTSUPPORTEDFORCLIENT {
  issue?: ShippingTypeNotSupportedForClientIssueEnum;
  description?: ShippingTypeNotSupportedForClientDescriptionEnum;
}

export const sHIPPINGTYPENOTSUPPORTEDFORCLIENTSchema: Schema<SHIPPINGTYPENOTSUPPORTEDFORCLIENT> = object(
  {
    issue: [
      'issue',
      optional(shippingTypeNotSupportedForClientIssueEnumSchema),
    ],
    description: [
      'description',
      optional(shippingTypeNotSupportedForClientDescriptionEnumSchema),
    ],
  }
);
