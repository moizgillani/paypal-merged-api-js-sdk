/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  NoPaymentSourceProvidedDescriptionEnum,
  noPaymentSourceProvidedDescriptionEnumSchema,
} from './noPaymentSourceProvidedDescriptionEnum';
import {
  NoPaymentSourceProvidedIssueEnum,
  noPaymentSourceProvidedIssueEnumSchema,
} from './noPaymentSourceProvidedIssueEnum';

export interface NOPAYMENTSOURCEPROVIDED {
  issue?: NoPaymentSourceProvidedIssueEnum;
  description?: NoPaymentSourceProvidedDescriptionEnum;
}

export const nOPAYMENTSOURCEPROVIDEDSchema: Schema<NOPAYMENTSOURCEPROVIDED> = object(
  {
    issue: ['issue', optional(noPaymentSourceProvidedIssueEnumSchema)],
    description: [
      'description',
      optional(noPaymentSourceProvidedDescriptionEnumSchema),
    ],
  }
);
