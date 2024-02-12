/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidPickupAddress1DescriptionEnum,
  invalidPickupAddress1DescriptionEnumSchema,
} from './invalidPickupAddress1DescriptionEnum';
import {
  InvalidPickupAddress1IssueEnum,
  invalidPickupAddress1IssueEnumSchema,
} from './invalidPickupAddress1IssueEnum';

export interface INVALIDPICKUPADDRESSERROR {
  issue?: InvalidPickupAddress1IssueEnum;
  description?: InvalidPickupAddress1DescriptionEnum;
}

export const iNVALIDPICKUPADDRESSERRORSchema: Schema<INVALIDPICKUPADDRESSERROR> = object(
  {
    issue: ['issue', optional(invalidPickupAddress1IssueEnumSchema)],
    description: [
      'description',
      optional(invalidPickupAddress1DescriptionEnumSchema),
    ],
  }
);
