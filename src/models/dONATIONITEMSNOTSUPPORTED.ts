/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  DonationItemsNotSupportedDescriptionEnum,
  donationItemsNotSupportedDescriptionEnumSchema,
} from './donationItemsNotSupportedDescriptionEnum';
import {
  DonationItemsNotSupportedIssueEnum,
  donationItemsNotSupportedIssueEnumSchema,
} from './donationItemsNotSupportedIssueEnum';

export interface DONATIONITEMSNOTSUPPORTED {
  issue?: DonationItemsNotSupportedIssueEnum;
  description?: DonationItemsNotSupportedDescriptionEnum;
}

export const dONATIONITEMSNOTSUPPORTEDSchema: Schema<DONATIONITEMSNOTSUPPORTED> = object(
  {
    issue: ['issue', optional(donationItemsNotSupportedIssueEnumSchema)],
    description: [
      'description',
      optional(donationItemsNotSupportedDescriptionEnumSchema),
    ],
  }
);