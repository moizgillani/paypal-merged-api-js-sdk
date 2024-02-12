/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AuthCaptureNotEnabled2DescriptionEnum,
  authCaptureNotEnabled2DescriptionEnumSchema,
} from './authCaptureNotEnabled2DescriptionEnum';
import {
  AuthCaptureNotEnabled2IssueEnum,
  authCaptureNotEnabled2IssueEnumSchema,
} from './authCaptureNotEnabled2IssueEnum';

export interface AUTHCAPTURENOTENABLEDERRORRESPONSE {
  issue?: AuthCaptureNotEnabled2IssueEnum;
  description?: AuthCaptureNotEnabled2DescriptionEnum;
}

export const aUTHCAPTURENOTENABLEDERRORRESPONSESchema: Schema<AUTHCAPTURENOTENABLEDERRORRESPONSE> = object(
  {
    issue: ['issue', optional(authCaptureNotEnabled2IssueEnumSchema)],
    description: [
      'description',
      optional(authCaptureNotEnabled2DescriptionEnumSchema),
    ],
  }
);
