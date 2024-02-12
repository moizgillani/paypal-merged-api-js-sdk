/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidPickupAddressDescriptionEnum,
  invalidPickupAddressDescriptionEnumSchema,
} from './invalidPickupAddressDescriptionEnum';
import {
  InvalidPickupAddressIssueEnum,
  invalidPickupAddressIssueEnumSchema,
} from './invalidPickupAddressIssueEnum';

export interface INVALIDPICKUPADDRESS {
  issue?: InvalidPickupAddressIssueEnum;
  description?: InvalidPickupAddressDescriptionEnum;
}

export const iNVALIDPICKUPADDRESSSchema: Schema<INVALIDPICKUPADDRESS> = object({
  issue: ['issue', optional(invalidPickupAddressIssueEnumSchema)],
  description: [
    'description',
    optional(invalidPickupAddressDescriptionEnumSchema),
  ],
});
