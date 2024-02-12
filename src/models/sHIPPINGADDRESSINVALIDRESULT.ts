/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ShippingAddressInvalid2DescriptionEnum,
  shippingAddressInvalid2DescriptionEnumSchema,
} from './shippingAddressInvalid2DescriptionEnum';
import {
  ShippingAddressInvalid2IssueEnum,
  shippingAddressInvalid2IssueEnumSchema,
} from './shippingAddressInvalid2IssueEnum';

export interface SHIPPINGADDRESSINVALIDRESULT {
  issue?: ShippingAddressInvalid2IssueEnum;
  description?: ShippingAddressInvalid2DescriptionEnum;
}

export const sHIPPINGADDRESSINVALIDRESULTSchema: Schema<SHIPPINGADDRESSINVALIDRESULT> = object(
  {
    issue: ['issue', optional(shippingAddressInvalid2IssueEnumSchema)],
    description: [
      'description',
      optional(shippingAddressInvalid2DescriptionEnumSchema),
    ],
  }
);