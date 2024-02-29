/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  INVALIDPARAMETERSYNTAXPayments,
  iNVALIDPARAMETERSYNTAXPaymentsSchema,
} from '../iNVALIDPARAMETERSYNTAXPayments';
import {
  INVALIDSTRINGLENGTHPayments,
  iNVALIDSTRINGLENGTHPaymentsSchema,
} from '../iNVALIDSTRINGLENGTHPayments';
import {
  MISSINGREQUIREDPARAMETERPayments,
  mISSINGREQUIREDPARAMETERPaymentsSchema,
} from '../mISSINGREQUIREDPARAMETERPayments';

/** This is a container type for any-of types. */
export type Capturesrefund400issuesItems = MISSINGREQUIREDPARAMETERPayments | INVALIDPARAMETERSYNTAXPayments | INVALIDSTRINGLENGTHPayments;

export const capturesrefund400issuesItemsSchema: Schema<Capturesrefund400issuesItems> = anyOf(
  [
    mISSINGREQUIREDPARAMETERPaymentsSchema,
    iNVALIDPARAMETERSYNTAXPaymentsSchema,
    iNVALIDSTRINGLENGTHPaymentsSchema,
  ]
);

export namespace Capturesrefund400issuesItems {
  /**
  * Validation method to narrow down union type to MISSINGREQUIREDPARAMETERPayments type case.
  *
  * This is MISSING_REQUIRED_PARAMETER_Payments case.
  */
  export function isMISSINGREQUIREDPARAMETERPayments(value: unknown): value is MISSINGREQUIREDPARAMETERPayments {
    const validationResult = validateAndMap(value, mISSINGREQUIREDPARAMETERPaymentsSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to INVALIDPARAMETERSYNTAXPayments type case.
  *
  * This is INVALID_PARAMETER_SYNTAX_Payments case.
  */
  export function isINVALIDPARAMETERSYNTAXPayments(value: unknown): value is INVALIDPARAMETERSYNTAXPayments {
    const validationResult = validateAndMap(value, iNVALIDPARAMETERSYNTAXPaymentsSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to INVALIDSTRINGLENGTHPayments type case.
  *
  * This is INVALID_STRING_LENGTH_Payments case.
  */
  export function isINVALIDSTRINGLENGTHPayments(value: unknown): value is INVALIDSTRINGLENGTHPayments {
    const validationResult = validateAndMap(value, iNVALIDSTRINGLENGTHPaymentsSchema);
    return validationResult.errors === false;
  }
}
