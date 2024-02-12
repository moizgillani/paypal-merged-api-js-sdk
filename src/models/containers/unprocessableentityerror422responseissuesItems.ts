/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  AUTHCAPTURECURRENCYMISMATCH,
  aUTHCAPTURECURRENCYMISMATCHSchema,
} from '../aUTHCAPTURECURRENCYMISMATCH';
import {
  AUTHORIZATIONALREADYCAPTURED,
  aUTHORIZATIONALREADYCAPTUREDSchema,
} from '../aUTHORIZATIONALREADYCAPTURED';
import {
  AUTHORIZATIONDENIED,
  aUTHORIZATIONDENIEDSchema,
} from '../aUTHORIZATIONDENIED';
import {
  AUTHORIZATIONEXPIRED,
  aUTHORIZATIONEXPIREDSchema,
} from '../aUTHORIZATIONEXPIRED';
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
  DUPLICATEINVOICEID,
  dUPLICATEINVOICEIDSchema,
} from '../dUPLICATEINVOICEID';
import {
  INVALIDCURRENCYCODEPayments,
  iNVALIDCURRENCYCODEPaymentsSchema,
} from '../iNVALIDCURRENCYCODEPayments';
import {
  MAXCAPTUREAMOUNTEXCEEDED,
  mAXCAPTUREAMOUNTEXCEEDEDSchema,
} from '../mAXCAPTUREAMOUNTEXCEEDED';
import {
  MAXCAPTURECOUNTEXCEEDED,
  mAXCAPTURECOUNTEXCEEDEDSchema,
} from '../mAXCAPTURECOUNTEXCEEDED';
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
  TRANSACTIONREFUSED,
  tRANSACTIONREFUSEDSchema,
} from '../tRANSACTIONREFUSED';

/** This is a container type for any-of types. */
export type Unprocessableentityerror422responseissuesItems = INVALIDCURRENCYCODEPayments | CANNOTBEZEROORNEGATIVE | DECIMALPRECISION | DECIMALSNOTSUPPORTED | TRANSACTIONREFUSED | AUTHORIZATIONVOIDED | MAXCAPTURECOUNTEXCEEDED | DUPLICATEINVOICEID | AUTHCAPTURECURRENCYMISMATCH | PAYERCANNOTPAY | AUTHORIZATIONDENIED | AUTHORIZATIONEXPIRED | AUTHORIZATIONALREADYCAPTURED | MAXCAPTUREAMOUNTEXCEEDED | PAYEEACCOUNTLOCKEDORCLOSED | PAYERACCOUNTLOCKEDORCLOSED | PAYEEACCOUNTRESTRICTED;

export const unprocessableentityerror422responseissuesItemsSchema: Schema<Unprocessableentityerror422responseissuesItems> = anyOf(
  [
    iNVALIDCURRENCYCODEPaymentsSchema,
    cANNOTBEZEROORNEGATIVESchema,
    dECIMALPRECISIONSchema,
    dECIMALSNOTSUPPORTEDSchema,
    tRANSACTIONREFUSEDSchema,
    aUTHORIZATIONVOIDEDSchema,
    mAXCAPTURECOUNTEXCEEDEDSchema,
    dUPLICATEINVOICEIDSchema,
    aUTHCAPTURECURRENCYMISMATCHSchema,
    pAYERCANNOTPAYSchema,
    aUTHORIZATIONDENIEDSchema,
    aUTHORIZATIONEXPIREDSchema,
    aUTHORIZATIONALREADYCAPTUREDSchema,
    mAXCAPTUREAMOUNTEXCEEDEDSchema,
    pAYEEACCOUNTLOCKEDORCLOSEDSchema,
    pAYERACCOUNTLOCKEDORCLOSEDSchema,
    pAYEEACCOUNTRESTRICTEDSchema,
  ]
);

export namespace Unprocessableentityerror422responseissuesItems {
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
  * Validation method to narrow down union type to MAXCAPTURECOUNTEXCEEDED type case.
  *
  * This is MAX_CAPTURE_COUNT_EXCEEDED case.
  */
  export function isMAXCAPTURECOUNTEXCEEDED(value: unknown): value is MAXCAPTURECOUNTEXCEEDED {
    const validationResult = validateAndMap(value, mAXCAPTURECOUNTEXCEEDEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to DUPLICATEINVOICEID type case.
  *
  * This is DUPLICATE_INVOICE_ID case.
  */
  export function isDUPLICATEINVOICEID(value: unknown): value is DUPLICATEINVOICEID {
    const validationResult = validateAndMap(value, dUPLICATEINVOICEIDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AUTHCAPTURECURRENCYMISMATCH type case.
  *
  * This is AUTH_CAPTURE_CURRENCY_MISMATCH case.
  */
  export function isAUTHCAPTURECURRENCYMISMATCH(value: unknown): value is AUTHCAPTURECURRENCYMISMATCH {
    const validationResult = validateAndMap(value, aUTHCAPTURECURRENCYMISMATCHSchema);
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
  * Validation method to narrow down union type to AUTHORIZATIONDENIED type case.
  *
  * This is AUTHORIZATION_DENIED case.
  */
  export function isAUTHORIZATIONDENIED(value: unknown): value is AUTHORIZATIONDENIED {
    const validationResult = validateAndMap(value, aUTHORIZATIONDENIEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AUTHORIZATIONEXPIRED type case.
  *
  * This is AUTHORIZATION_EXPIRED case.
  */
  export function isAUTHORIZATIONEXPIRED(value: unknown): value is AUTHORIZATIONEXPIRED {
    const validationResult = validateAndMap(value, aUTHORIZATIONEXPIREDSchema);
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
  * Validation method to narrow down union type to MAXCAPTUREAMOUNTEXCEEDED type case.
  *
  * This is MAX_CAPTURE_AMOUNT_EXCEEDED case.
  */
  export function isMAXCAPTUREAMOUNTEXCEEDED(value: unknown): value is MAXCAPTUREAMOUNTEXCEEDED {
    const validationResult = validateAndMap(value, mAXCAPTUREAMOUNTEXCEEDEDSchema);
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
}
