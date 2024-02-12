/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  Authorizationsreauthorize400issuesItems,
  authorizationsreauthorize400issuesItemsSchema,
} from './containers/authorizationsreauthorize400issuesItems';

export interface AuthorizationsReauthorize400 {
  issues?: Authorizationsreauthorize400issuesItems[];
}

export const authorizationsReauthorize400Schema: Schema<AuthorizationsReauthorize400> = object(
  {
    issues: [
      'issues',
      optional(
        array(lazy(() => authorizationsreauthorize400issuesItemsSchema))
      ),
    ],
  }
);
