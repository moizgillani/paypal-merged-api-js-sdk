/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  DonationItemsNotSupported1DescriptionEnum,
  donationItemsNotSupported1DescriptionEnumSchema,
} from './donationItemsNotSupported1DescriptionEnum';
import {
  DonationItemsNotSupported1IssueEnum,
  donationItemsNotSupported1IssueEnumSchema,
} from './donationItemsNotSupported1IssueEnum';

export interface DonationItemsNotSupported1 {
  issue?: DonationItemsNotSupported1IssueEnum;
  description?: DonationItemsNotSupported1DescriptionEnum;
}

export const donationItemsNotSupported1Schema: Schema<DonationItemsNotSupported1> = object(
  {
    issue: ['issue', optional(donationItemsNotSupported1IssueEnumSchema)],
    description: [
      'description',
      optional(donationItemsNotSupported1DescriptionEnumSchema),
    ],
  }
);