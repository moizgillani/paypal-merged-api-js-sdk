/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AuthCaptureNotEnabled1DescriptionEnum,
  authCaptureNotEnabled1DescriptionEnumSchema,
} from './authCaptureNotEnabled1DescriptionEnum';
import {
  AuthCaptureNotEnabled1IssueEnum,
  authCaptureNotEnabled1IssueEnumSchema,
} from './authCaptureNotEnabled1IssueEnum';

export interface AUTHCAPTURENOTENABLEDERROR {
  issue?: AuthCaptureNotEnabled1IssueEnum;
  description?: AuthCaptureNotEnabled1DescriptionEnum;
}

export const aUTHCAPTURENOTENABLEDERRORSchema: Schema<AUTHCAPTURENOTENABLEDERROR> = object(
  {
    issue: ['issue', optional(authCaptureNotEnabled1IssueEnumSchema)],
    description: [
      'description',
      optional(authCaptureNotEnabled1DescriptionEnumSchema),
    ],
  }
);
