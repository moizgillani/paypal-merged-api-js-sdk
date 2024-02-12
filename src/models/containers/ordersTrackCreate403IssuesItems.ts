/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  PERMISSIONDENIEDERRORRESPONSE,
  pERMISSIONDENIEDERRORRESPONSESchema,
} from '../pERMISSIONDENIEDERRORRESPONSE';

/** This is a container type for any-of types. */
export type OrdersTrackCreate403IssuesItems = PERMISSIONDENIEDERRORRESPONSE;

export const ordersTrackCreate403IssuesItemsSchema: Schema<OrdersTrackCreate403IssuesItems> = anyOf(
  [pERMISSIONDENIEDERRORRESPONSESchema]
);

export namespace OrdersTrackCreate403IssuesItems {
  /**
  * Validation method to narrow down union type to PERMISSIONDENIEDERRORRESPONSE type case.
  *
  * This is PERMISSION_DENIED_ERROR_RESPONSE case.
  */
  export function isPERMISSIONDENIEDERRORRESPONSE(value: unknown): value is PERMISSIONDENIEDERRORRESPONSE {
    const validationResult = validateAndMap(value, pERMISSIONDENIEDERRORRESPONSESchema);
    return validationResult.errors === false;
  }
}
