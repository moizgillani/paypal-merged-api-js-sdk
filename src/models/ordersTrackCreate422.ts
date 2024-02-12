/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  OrdersTrackCreate422IssuesItems,
  ordersTrackCreate422IssuesItemsSchema,
} from './containers/ordersTrackCreate422IssuesItems';

export interface OrdersTrackCreate422 {
  issues?: OrdersTrackCreate422IssuesItems[];
}

export const ordersTrackCreate422Schema: Schema<OrdersTrackCreate422> = object({
  issues: [
    'issues',
    optional(array(lazy(() => ordersTrackCreate422IssuesItemsSchema))),
  ],
});
