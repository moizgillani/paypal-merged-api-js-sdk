/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  PERMISSIONDENIEDPayments,
  pERMISSIONDENIEDPaymentsSchema,
} from '../pERMISSIONDENIEDPayments';

/** This is a container type for any-of types. */
export type Forbiddenerror403responseissuesItems = PERMISSIONDENIEDPayments;

export const forbiddenerror403responseissuesItemsSchema: Schema<Forbiddenerror403responseissuesItems> = anyOf(
  [pERMISSIONDENIEDPaymentsSchema]
);

export namespace Forbiddenerror403responseissuesItems {
  /**
  * Validation method to narrow down union type to PERMISSIONDENIEDPayments type case.
  *
  * This is PERMISSION_DENIED_Payments case.
  */
  export function isPERMISSIONDENIEDPayments(value: unknown): value is PERMISSIONDENIEDPayments {
    const validationResult = validateAndMap(value, pERMISSIONDENIEDPaymentsSchema);
    return validationResult.errors === false;
  }
}
