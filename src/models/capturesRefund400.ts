/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  Capturesrefund400issuesItems,
  capturesrefund400issuesItemsSchema,
} from './containers/capturesrefund400issuesItems';

export interface CapturesRefund400 {
  issues?: Capturesrefund400issuesItems[];
}

export const capturesRefund400Schema: Schema<CapturesRefund400> = object({
  issues: [
    'issues',
    optional(array(lazy(() => capturesrefund400issuesItemsSchema))),
  ],
});
