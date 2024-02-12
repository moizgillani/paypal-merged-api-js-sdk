/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  UnauthorizedErrorIssue,
  unauthorizedErrorIssueSchema,
} from './containers/unauthorizedErrorIssue';

export interface UnauthorizedRequestError {
  issues?: UnauthorizedErrorIssue[];
}

export const unauthorizedRequestErrorSchema: Schema<UnauthorizedRequestError> = object(
  {
    issues: [
      'issues',
      optional(array(lazy(() => unauthorizedErrorIssueSchema))),
    ],
  }
);
