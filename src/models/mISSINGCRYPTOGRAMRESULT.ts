/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MissingCryptogram2DescriptionEnum,
  missingCryptogram2DescriptionEnumSchema,
} from './missingCryptogram2DescriptionEnum';
import {
  MissingCryptogram2IssueEnum,
  missingCryptogram2IssueEnumSchema,
} from './missingCryptogram2IssueEnum';

export interface MISSINGCRYPTOGRAMRESULT {
  issue?: MissingCryptogram2IssueEnum;
  description?: MissingCryptogram2DescriptionEnum;
}

export const mISSINGCRYPTOGRAMRESULTSchema: Schema<MISSINGCRYPTOGRAMRESULT> = object(
  {
    issue: ['issue', optional(missingCryptogram2IssueEnumSchema)],
    description: [
      'description',
      optional(missingCryptogram2DescriptionEnumSchema),
    ],
  }
);