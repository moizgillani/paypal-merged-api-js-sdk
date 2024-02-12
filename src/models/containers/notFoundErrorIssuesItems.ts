/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  INVALIDRESOURCEID,
  iNVALIDRESOURCEIDSchema,
} from '../iNVALIDRESOURCEID';

/** This is a container type for any-of types. */
export type NotFoundErrorIssuesItems = INVALIDRESOURCEID;

export const notFoundErrorIssuesItemsSchema: Schema<NotFoundErrorIssuesItems> = anyOf(
  [iNVALIDRESOURCEIDSchema]
);

export namespace NotFoundErrorIssuesItems {
  /**
  * Validation method to narrow down union type to INVALIDRESOURCEID type case.
  *
  * This is INVALID_RESOURCE_ID case.
  */
  export function isINVALIDRESOURCEID(value: unknown): value is INVALIDRESOURCEID {
    const validationResult = validateAndMap(value, iNVALIDRESOURCEIDSchema);
    return validationResult.errors === false;
  }
}