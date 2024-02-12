/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  PREVIOUSREQUESTINPROGRESS,
  pREVIOUSREQUESTINPROGRESSSchema,
} from '../pREVIOUSREQUESTINPROGRESS';

/** This is a container type for any-of types. */
export type Conflicterror409responseissuesItems = PREVIOUSREQUESTINPROGRESS;

export const conflicterror409responseissuesItemsSchema: Schema<Conflicterror409responseissuesItems> = anyOf(
  [pREVIOUSREQUESTINPROGRESSSchema]
);

export namespace Conflicterror409responseissuesItems {
  /**
  * Validation method to narrow down union type to PREVIOUSREQUESTINPROGRESS type case.
  *
  * This is PREVIOUS_REQUEST_IN_PROGRESS case.
  */
  export function isPREVIOUSREQUESTINPROGRESS(value: unknown): value is PREVIOUSREQUESTINPROGRESS {
    const validationResult = validateAndMap(value, pREVIOUSREQUESTINPROGRESSSchema);
    return validationResult.errors === false;
  }
}