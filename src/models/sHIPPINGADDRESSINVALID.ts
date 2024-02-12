/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ShippingAddressInvalidDescriptionEnum,
  shippingAddressInvalidDescriptionEnumSchema,
} from './shippingAddressInvalidDescriptionEnum';
import {
  ShippingAddressInvalidIssueEnum,
  shippingAddressInvalidIssueEnumSchema,
} from './shippingAddressInvalidIssueEnum';

export interface SHIPPINGADDRESSINVALID {
  issue?: ShippingAddressInvalidIssueEnum;
  description?: ShippingAddressInvalidDescriptionEnum;
}

export const sHIPPINGADDRESSINVALIDSchema: Schema<SHIPPINGADDRESSINVALID> = object(
  {
    issue: ['issue', optional(shippingAddressInvalidIssueEnumSchema)],
    description: [
      'description',
      optional(shippingAddressInvalidDescriptionEnumSchema),
    ],
  }
);
