/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PlatformFeesNotSupported1DescriptionEnum,
  platformFeesNotSupported1DescriptionEnumSchema,
} from './platformFeesNotSupported1DescriptionEnum';
import {
  PlatformFeesNotSupported1IssueEnum,
  platformFeesNotSupported1IssueEnumSchema,
} from './platformFeesNotSupported1IssueEnum';

export interface PlatformFeesNotSupported1 {
  issue?: PlatformFeesNotSupported1IssueEnum;
  description?: PlatformFeesNotSupported1DescriptionEnum;
}

export const platformFeesNotSupported1Schema: Schema<PlatformFeesNotSupported1> = object(
  {
    issue: ['issue', optional(platformFeesNotSupported1IssueEnumSchema)],
    description: [
      'description',
      optional(platformFeesNotSupported1DescriptionEnumSchema),
    ],
  }
);