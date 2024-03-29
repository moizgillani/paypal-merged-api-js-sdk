/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  Conflicterror409responseissuesItems,
  conflicterror409responseissuesItemsSchema,
} from './containers/conflicterror409responseissuesItems';

export interface ConflictError409Response {
  issues?: Conflicterror409responseissuesItems[];
}

export const conflictError409ResponseSchema: Schema<ConflictError409Response> = object(
  {
    issues: [
      'issues',
      optional(array(lazy(() => conflicterror409responseissuesItemsSchema))),
    ],
  }
);
