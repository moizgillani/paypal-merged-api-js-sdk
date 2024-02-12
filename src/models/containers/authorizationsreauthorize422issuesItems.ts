/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  AUTHCURRENCYMISMATCH,
  aUTHCURRENCYMISMATCHSchema,
} from '../aUTHCURRENCYMISMATCH';
import {
  AUTHORIZATIONALREADYCAPTURED,
  aUTHORIZATIONALREADYCAPTUREDSchema,
} from '../aUTHORIZATIONALREADYCAPTURED';
import {
  AUTHORIZATIONVOIDED,
  aUTHORIZATIONVOIDEDSchema,
} from '../aUTHORIZATIONVOIDED';
import {
  CANNOTBEZEROORNEGATIVE,
  cANNOTBEZEROORNEGATIVESchema,
} from '../cANNOTBEZEROORNEGATIVE';
import { DECIMALPRECISION, dECIMALPRECISIONSchema } from '../dECIMALPRECISION';
import {
  DECIMALSNOTSUPPORTED,
  dECIMALSNOTSUPPORTEDSchema,
} from '../dECIMALSNOTSUPPORTED';
import {
  INVALIDCURRENCYCODEPayments,
  iNVALIDCURRENCYCODEPaymentsSchema,
} from '../iNVALIDCURRENCYCODEPayments';
import {
  PAYEEACCOUNTLOCKEDORCLOSED,
  pAYEEACCOUNTLOCKEDORCLOSEDSchema,
} from '../pAYEEACCOUNTLOCKEDORCLOSED';
import {
  PAYEEACCOUNTRESTRICTED,
  pAYEEACCOUNTRESTRICTEDSchema,
} from '../pAYEEACCOUNTRESTRICTED';
import {
  PAYERACCOUNTLOCKEDORCLOSED,
  pAYERACCOUNTLOCKEDORCLOSEDSchema,
} from '../pAYERACCOUNTLOCKEDORCLOSED';
import { PAYERCANNOTPAY, pAYERCANNOTPAYSchema } from '../pAYERCANNOTPAY';
import {
  REAUTHORIZATIONNOTSUPPORTED,
  rEAUTHORIZATIONNOTSUPPORTEDSchema,
} from '../rEAUTHORIZATIONNOTSUPPORTED';
import {
  TRANSACTIONREFUSED,
  tRANSACTIONREFUSEDSchema,
} from '../tRANSACTIONREFUSED';

/** This is a container type for any-of types. */
export type Authorizationsreauthorize422issuesItems = INVALIDCURRENCYCODEPayments | CANNOTBEZEROORNEGATIVE | DECIMALPRECISION | DECIMALSNOTSUPPORTED | TRANSACTIONREFUSED | AUTHORIZATIONVOIDED | PAYERCANNOTPAY | AUTHORIZATIONALREADYCAPTURED | PAYEEACCOUNTLOCKEDORCLOSED | PAYERACCOUNTLOCKEDORCLOSED | PAYEEACCOUNTRESTRICTED | REAUTHORIZATIONNOTSUPPORTED | AUTHCURRENCYMISMATCH;

export const authorizationsreauthorize422issuesItemsSchema: Schema<Authorizationsreauthorize422issuesItems> = anyOf(
  [
    iNVALIDCURRENCYCODEPaymentsSchema,
    cANNOTBEZEROORNEGATIVESchema,
    dECIMALPRECISIONSchema,
    dECIMALSNOTSUPPORTEDSchema,
    tRANSACTIONREFUSEDSchema,
    aUTHORIZATIONVOIDEDSchema,
    pAYERCANNOTPAYSchema,
    aUTHORIZATIONALREADYCAPTUREDSchema,
    pAYEEACCOUNTLOCKEDORCLOSEDSchema,
    pAYERACCOUNTLOCKEDORCLOSEDSchema,
    pAYEEACCOUNTRESTRICTEDSchema,
    rEAUTHORIZATIONNOTSUPPORTEDSchema,
    aUTHCURRENCYMISMATCHSchema,
  ]
);

export namespace Authorizationsreauthorize422issuesItems {
  /**
  * Validation method to narrow down union type to INVALIDCURRENCYCODEPayments type case.
  *
  * This is INVALID_CURRENCY_CODE_Payments case.
  */
  export function isINVALIDCURRENCYCODEPayments(value: unknown): value is INVALIDCURRENCYCODEPayments {
    const validationResult = validateAndMap(value, iNVALIDCURRENCYCODEPaymentsSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CANNOTBEZEROORNEGATIVE type case.
  *
  * This is CANNOT_BE_ZERO_OR_NEGATIVE case.
  */
  export function isCANNOTBEZEROORNEGATIVE(value: unknown): value is CANNOTBEZEROORNEGATIVE {
    const validationResult = validateAndMap(value, cANNOTBEZEROORNEGATIVESchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to DECIMALPRECISION type case.
  *
  * This is DECIMAL_PRECISION case.
  */
  export function isDECIMALPRECISION(value: unknown): value is DECIMALPRECISION {
    const validationResult = validateAndMap(value, dECIMALPRECISIONSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to DECIMALSNOTSUPPORTED type case.
  *
  * This is DECIMALS_NOT_SUPPORTED case.
  */
  export function isDECIMALSNOTSUPPORTED(value: unknown): value is DECIMALSNOTSUPPORTED {
    const validationResult = validateAndMap(value, dECIMALSNOTSUPPORTEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to TRANSACTIONREFUSED type case.
  *
  * This is TRANSACTION_REFUSED case.
  */
  export function isTRANSACTIONREFUSED(value: unknown): value is TRANSACTIONREFUSED {
    const validationResult = validateAndMap(value, tRANSACTIONREFUSEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AUTHORIZATIONVOIDED type case.
  *
  * This is AUTHORIZATION_VOIDED case.
  */
  export function isAUTHORIZATIONVOIDED(value: unknown): value is AUTHORIZATIONVOIDED {
    const validationResult = validateAndMap(value, aUTHORIZATIONVOIDEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYERCANNOTPAY type case.
  *
  * This is PAYER_CANNOT_PAY case.
  */
  export function isPAYERCANNOTPAY(value: unknown): value is PAYERCANNOTPAY {
    const validationResult = validateAndMap(value, pAYERCANNOTPAYSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AUTHORIZATIONALREADYCAPTURED type case.
  *
  * This is AUTHORIZATION_ALREADY_CAPTURED case.
  */
  export function isAUTHORIZATIONALREADYCAPTURED(value: unknown): value is AUTHORIZATIONALREADYCAPTURED {
    const validationResult = validateAndMap(value, aUTHORIZATIONALREADYCAPTUREDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYEEACCOUNTLOCKEDORCLOSED type case.
  *
  * This is PAYEE_ACCOUNT_LOCKED_OR_CLOSED case.
  */
  export function isPAYEEACCOUNTLOCKEDORCLOSED(value: unknown): value is PAYEEACCOUNTLOCKEDORCLOSED {
    const validationResult = validateAndMap(value, pAYEEACCOUNTLOCKEDORCLOSEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYERACCOUNTLOCKEDORCLOSED type case.
  *
  * This is PAYER_ACCOUNT_LOCKED_OR_CLOSED case.
  */
  export function isPAYERACCOUNTLOCKEDORCLOSED(value: unknown): value is PAYERACCOUNTLOCKEDORCLOSED {
    const validationResult = validateAndMap(value, pAYERACCOUNTLOCKEDORCLOSEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYEEACCOUNTRESTRICTED type case.
  *
  * This is PAYEE_ACCOUNT_RESTRICTED case.
  */
  export function isPAYEEACCOUNTRESTRICTED(value: unknown): value is PAYEEACCOUNTRESTRICTED {
    const validationResult = validateAndMap(value, pAYEEACCOUNTRESTRICTEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to REAUTHORIZATIONNOTSUPPORTED type case.
  *
  * This is REAUTHORIZATION_NOT_SUPPORTED case.
  */
  export function isREAUTHORIZATIONNOTSUPPORTED(value: unknown): value is REAUTHORIZATIONNOTSUPPORTED {
    const validationResult = validateAndMap(value, rEAUTHORIZATIONNOTSUPPORTEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AUTHCURRENCYMISMATCH type case.
  *
  * This is AUTH_CURRENCY_MISMATCH case.
  */
  export function isAUTHCURRENCYMISMATCH(value: unknown): value is AUTHCURRENCYMISMATCH {
    const validationResult = validateAndMap(value, aUTHCURRENCYMISMATCHSchema);
    return validationResult.errors === false;
  }
}