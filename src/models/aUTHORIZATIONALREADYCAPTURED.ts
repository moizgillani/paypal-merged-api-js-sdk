/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AuthorizationAlreadyCapturedDescriptionEnum,
  authorizationAlreadyCapturedDescriptionEnumSchema,
} from './authorizationAlreadyCapturedDescriptionEnum';
import {
  AuthorizationAlreadyCapturedIssueEnum,
  authorizationAlreadyCapturedIssueEnumSchema,
} from './authorizationAlreadyCapturedIssueEnum';

export interface AUTHORIZATIONALREADYCAPTURED {
  issue?: AuthorizationAlreadyCapturedIssueEnum;
  description?: AuthorizationAlreadyCapturedDescriptionEnum;
}

export const aUTHORIZATIONALREADYCAPTUREDSchema: Schema<AUTHORIZATIONALREADYCAPTURED> = object(
  {
    issue: ['issue', optional(authorizationAlreadyCapturedIssueEnumSchema)],
    description: [
      'description',
      optional(authorizationAlreadyCapturedDescriptionEnumSchema),
    ],
  }
);
