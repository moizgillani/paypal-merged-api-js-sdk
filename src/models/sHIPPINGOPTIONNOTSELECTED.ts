/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ShippingOptionNotSelectedDescriptionEnum,
  shippingOptionNotSelectedDescriptionEnumSchema,
} from './shippingOptionNotSelectedDescriptionEnum';
import {
  ShippingOptionNotSelectedIssueEnum,
  shippingOptionNotSelectedIssueEnumSchema,
} from './shippingOptionNotSelectedIssueEnum';

export interface SHIPPINGOPTIONNOTSELECTED {
  issue?: ShippingOptionNotSelectedIssueEnum;
  description?: ShippingOptionNotSelectedDescriptionEnum;
}

export const sHIPPINGOPTIONNOTSELECTEDSchema: Schema<SHIPPINGOPTIONNOTSELECTED> = object(
  {
    issue: ['issue', optional(shippingOptionNotSelectedIssueEnumSchema)],
    description: [
      'description',
      optional(shippingOptionNotSelectedDescriptionEnumSchema),
    ],
  }
);
