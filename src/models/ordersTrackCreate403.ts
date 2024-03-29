/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  OrdersTrackCreate403IssuesItems,
  ordersTrackCreate403IssuesItemsSchema,
} from './containers/ordersTrackCreate403IssuesItems';

export interface OrdersTrackCreate403 {
  issues?: OrdersTrackCreate403IssuesItems[];
}

export const ordersTrackCreate403Schema: Schema<OrdersTrackCreate403> = object({
  issues: [
    'issues',
    optional(array(lazy(() => ordersTrackCreate403IssuesItemsSchema))),
  ],
});
