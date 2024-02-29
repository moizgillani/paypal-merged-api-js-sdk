/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  TRACKERIDNOTFOUND,
  tRACKERIDNOTFOUNDSchema,
} from '../tRACKERIDNOTFOUND';

/** This is a container type for any-of types. */
export type OrdersTrackersPatch404IssuesItems = TRACKERIDNOTFOUND;

export const ordersTrackersPatch404IssuesItemsSchema: Schema<OrdersTrackersPatch404IssuesItems> = anyOf(
  [tRACKERIDNOTFOUNDSchema]
);

export namespace OrdersTrackersPatch404IssuesItems {
  /**
  * Validation method to narrow down union type to TRACKERIDNOTFOUND type case.
  *
  * This is TRACKER_ID_NOT_FOUND case.
  */
  export function isTRACKERIDNOTFOUND(value: unknown): value is TRACKERIDNOTFOUND {
    const validationResult = validateAndMap(value, tRACKERIDNOTFOUNDSchema);
    return validationResult.errors === false;
  }
}
