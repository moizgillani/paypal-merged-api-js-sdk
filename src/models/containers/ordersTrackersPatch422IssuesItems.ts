/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  INVALIDJSONPOINTERFORMATERROR,
  iNVALIDJSONPOINTERFORMATERRORSchema,
} from '../iNVALIDJSONPOINTERFORMATERROR';
import {
  ITEMSKUMISMATCHERROR,
  iTEMSKUMISMATCHERRORSchema,
} from '../iTEMSKUMISMATCHERROR';
import {
  NOTPATCHABLEERROR,
  nOTPATCHABLEERRORSchema,
} from '../nOTPATCHABLEERROR';
import {
  PATCHPATHREQUIREDERROR,
  pATCHPATHREQUIREDERRORSchema,
} from '../pATCHPATHREQUIREDERROR';
import {
  PATCHVALUEREQUIREDERROR,
  pATCHVALUEREQUIREDERRORSchema,
} from '../pATCHVALUEREQUIREDERROR';

/** This is a container type for any-of types. */
export type OrdersTrackersPatch422IssuesItems = INVALIDJSONPOINTERFORMATERROR | NOTPATCHABLEERROR | PATCHVALUEREQUIREDERROR | PATCHPATHREQUIREDERROR | ITEMSKUMISMATCHERROR;

export const ordersTrackersPatch422IssuesItemsSchema: Schema<OrdersTrackersPatch422IssuesItems> = anyOf(
  [
    iNVALIDJSONPOINTERFORMATERRORSchema,
    nOTPATCHABLEERRORSchema,
    pATCHVALUEREQUIREDERRORSchema,
    pATCHPATHREQUIREDERRORSchema,
    iTEMSKUMISMATCHERRORSchema,
  ]
);

export namespace OrdersTrackersPatch422IssuesItems {
  /**
  * Validation method to narrow down union type to INVALIDJSONPOINTERFORMATERROR type case.
  *
  * This is INVALID_JSON_POINTER_FORMAT_ERROR case.
  */
  export function isINVALIDJSONPOINTERFORMATERROR(value: unknown): value is INVALIDJSONPOINTERFORMATERROR {
    const validationResult = validateAndMap(value, iNVALIDJSONPOINTERFORMATERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to NOTPATCHABLEERROR type case.
  *
  * This is NOT_PATCHABLE_ERROR case.
  */
  export function isNOTPATCHABLEERROR(value: unknown): value is NOTPATCHABLEERROR {
    const validationResult = validateAndMap(value, nOTPATCHABLEERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PATCHVALUEREQUIREDERROR type case.
  *
  * This is PATCH_VALUE_REQUIRED_ERROR case.
  */
  export function isPATCHVALUEREQUIREDERROR(value: unknown): value is PATCHVALUEREQUIREDERROR {
    const validationResult = validateAndMap(value, pATCHVALUEREQUIREDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PATCHPATHREQUIREDERROR type case.
  *
  * This is PATCH_PATH_REQUIRED_ERROR case.
  */
  export function isPATCHPATHREQUIREDERROR(value: unknown): value is PATCHPATHREQUIREDERROR {
    const validationResult = validateAndMap(value, pATCHPATHREQUIREDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ITEMSKUMISMATCHERROR type case.
  *
  * This is ITEM_SKU_MISMATCH_ERROR case.
  */
  export function isITEMSKUMISMATCHERROR(value: unknown): value is ITEMSKUMISMATCHERROR {
    const validationResult = validateAndMap(value, iTEMSKUMISMATCHERRORSchema);
    return validationResult.errors === false;
  }
}
