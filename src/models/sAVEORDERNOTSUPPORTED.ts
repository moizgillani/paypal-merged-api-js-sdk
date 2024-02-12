/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  SaveOrderNotSupportedDescriptionEnum,
  saveOrderNotSupportedDescriptionEnumSchema,
} from './saveOrderNotSupportedDescriptionEnum';
import {
  SaveOrderNotSupportedIssueEnum,
  saveOrderNotSupportedIssueEnumSchema,
} from './saveOrderNotSupportedIssueEnum';

export interface SAVEORDERNOTSUPPORTED {
  issue?: SaveOrderNotSupportedIssueEnum;
  description?: SaveOrderNotSupportedDescriptionEnum;
}

export const sAVEORDERNOTSUPPORTEDSchema: Schema<SAVEORDERNOTSUPPORTED> = object(
  {
    issue: ['issue', optional(saveOrderNotSupportedIssueEnumSchema)],
    description: [
      'description',
      optional(saveOrderNotSupportedDescriptionEnumSchema),
    ],
  }
);
