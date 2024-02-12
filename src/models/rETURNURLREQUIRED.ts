/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ReturnUrlRequiredDescriptionEnum,
  returnUrlRequiredDescriptionEnumSchema,
} from './returnUrlRequiredDescriptionEnum';
import {
  ReturnUrlRequiredIssueEnum,
  returnUrlRequiredIssueEnumSchema,
} from './returnUrlRequiredIssueEnum';

export interface RETURNURLREQUIRED {
  issue?: ReturnUrlRequiredIssueEnum;
  description?: ReturnUrlRequiredDescriptionEnum;
}

export const rETURNURLREQUIREDSchema: Schema<RETURNURLREQUIRED> = object({
  issue: ['issue', optional(returnUrlRequiredIssueEnumSchema)],
  description: [
    'description',
    optional(returnUrlRequiredDescriptionEnumSchema),
  ],
});
