/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  Authorizationsvoid422issuesItems,
  authorizationsvoid422issuesItemsSchema,
} from './containers/authorizationsvoid422issuesItems';

export interface AuthorizationsVoid422 {
  issues?: Authorizationsvoid422issuesItems[];
}

export const authorizationsVoid422Schema: Schema<AuthorizationsVoid422> = object(
  {
    issues: [
      'issues',
      optional(array(lazy(() => authorizationsvoid422issuesItemsSchema))),
    ],
  }
);
