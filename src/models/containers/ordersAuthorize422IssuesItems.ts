/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  ACTIONDOESNOTMATCHINTENT,
  aCTIONDOESNOTMATCHINTENTSchema,
} from '../aCTIONDOESNOTMATCHINTENT';
import {
  AGREEMENTALREADYCANCELLEDERROR,
  aGREEMENTALREADYCANCELLEDERRORSchema,
} from '../aGREEMENTALREADYCANCELLEDERROR';
import {
  AMOUNTCANNOTBESPECIFIED,
  aMOUNTCANNOTBESPECIFIEDSchema,
} from '../aMOUNTCANNOTBESPECIFIED';
import {
  APPLEPAYAMOUNTMISMATCHRESULT,
  aPPLEPAYAMOUNTMISMATCHRESULTSchema,
} from '../aPPLEPAYAMOUNTMISMATCHRESULT';
import {
  AUTHCAPTURENOTENABLEDERROR,
  aUTHCAPTURENOTENABLEDERRORSchema,
} from '../aUTHCAPTURENOTENABLEDERROR';
import {
  AUTHORIZATIONAMOUNTEXCEEDED,
  aUTHORIZATIONAMOUNTEXCEEDEDSchema,
} from '../aUTHORIZATIONAMOUNTEXCEEDED';
import {
  AUTHORIZATIONCURRENCYMISMATCH,
  aUTHORIZATIONCURRENCYMISMATCHSchema,
} from '../aUTHORIZATIONCURRENCYMISMATCH';
import {
  BILLINGAGREEMENTIDMISMATCH,
  bILLINGAGREEMENTIDMISMATCHSchema,
} from '../bILLINGAGREEMENTIDMISMATCH';
import {
  BILLINGAGREEMENTNOTFOUNDERROR,
  bILLINGAGREEMENTNOTFOUNDERRORSchema,
} from '../bILLINGAGREEMENTNOTFOUNDERROR';
import {
  CANCELURLREQUIREDERROR,
  cANCELURLREQUIREDERRORSchema,
} from '../cANCELURLREQUIREDERROR';
import {
  CARDBRANDNOTSUPPORTED,
  cARDBRANDNOTSUPPORTEDSchema,
} from '../cARDBRANDNOTSUPPORTED';
import {
  CARDEXPIRYREQUIREDERROR,
  cARDEXPIRYREQUIREDERRORSchema,
} from '../cARDEXPIRYREQUIREDERROR';
import {
  CARDNUMBERREQUIREDERROR,
  cARDNUMBERREQUIREDERRORSchema,
} from '../cARDNUMBERREQUIREDERROR';
import {
  CHARGEBACKONPREVIOUSTRANSACTIONERROR,
  cHARGEBACKONPREVIOUSTRANSACTIONERRORSchema,
} from '../cHARGEBACKONPREVIOUSTRANSACTIONERROR';
import {
  DECLINEDDUETORELATEDTXN,
  dECLINEDDUETORELATEDTXNSchema,
} from '../dECLINEDDUETORELATEDTXN';
import {
  DOMESTICTRANSACTIONREQUIREDERROR,
  dOMESTICTRANSACTIONREQUIREDERRORSchema,
} from '../dOMESTICTRANSACTIONREQUIREDERROR';
import {
  DUPLICATEINVOICEIDERROR,
  dUPLICATEINVOICEIDERRORSchema,
} from '../dUPLICATEINVOICEIDERROR';
import {
  INCOMPATIBLEPARAMETERVALUERESULT,
  iNCOMPATIBLEPARAMETERVALUERESULTSchema,
} from '../iNCOMPATIBLEPARAMETERVALUERESULT';
import {
  INVALIDPICKUPADDRESS,
  iNVALIDPICKUPADDRESSSchema,
} from '../iNVALIDPICKUPADDRESS';
import {
  INVALIDPREVIOUSTRANSACTIONREFERENCEERROR,
  iNVALIDPREVIOUSTRANSACTIONREFERENCEERRORSchema,
} from '../iNVALIDPREVIOUSTRANSACTIONREFERENCEERROR';
import {
  INVALIDSECURITYCODELENGTHRESULT,
  iNVALIDSECURITYCODELENGTHRESULTSchema,
} from '../iNVALIDSECURITYCODELENGTHRESULT';
import {
  MAXAUTHORIZATIONCOUNTEXCEEDED,
  mAXAUTHORIZATIONCOUNTEXCEEDEDSchema,
} from '../mAXAUTHORIZATIONCOUNTEXCEEDED';
import {
  MAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERROR,
  mAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERRORSchema,
} from '../mAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERROR';
import {
  MERCHANTAUTHRESULTSERROR,
  mERCHANTAUTHRESULTSERRORSchema,
} from '../mERCHANTAUTHRESULTSERROR';
import {
  MERCHANTINITIATEDWITHSECURITYCODEERROR,
  mERCHANTINITIATEDWITHSECURITYCODEERRORSchema,
} from '../mERCHANTINITIATEDWITHSECURITYCODEERROR';
import {
  MISMATCHEDVAULTIDTOPAYMENTSOURCERESULT,
  mISMATCHEDVAULTIDTOPAYMENTSOURCERESULTSchema,
} from '../mISMATCHEDVAULTIDTOPAYMENTSOURCERESULT';
import {
  MISSINGCRYPTOGRAMRESULT,
  mISSINGCRYPTOGRAMRESULTSchema,
} from '../mISSINGCRYPTOGRAMRESULT';
import {
  MISSINGPAYMENTPARAMETER,
  mISSINGPAYMENTPARAMETERSchema,
} from '../mISSINGPAYMENTPARAMETER';
import {
  MISSINGPREVIOUSREFERENCERESULT,
  mISSINGPREVIOUSREFERENCERESULTSchema,
} from '../mISSINGPREVIOUSREFERENCERESULT';
import {
  MULTIPURCHASEUNITSERROR,
  mULTIPURCHASEUNITSERRORSchema,
} from '../mULTIPURCHASEUNITSERROR';
import {
  NOTELIGIBLEFORPNREFPROCESSINGRESULT,
  nOTELIGIBLEFORPNREFPROCESSINGRESULTSchema,
} from '../nOTELIGIBLEFORPNREFPROCESSINGRESULT';
import {
  ORDERALREADYAUTHORIZEDERROR,
  oRDERALREADYAUTHORIZEDERRORSchema,
} from '../oRDERALREADYAUTHORIZEDERROR';
import {
  ORDERCANNOTBESAVED,
  oRDERCANNOTBESAVEDSchema,
} from '../oRDERCANNOTBESAVED';
import {
  ORDERCOMPLETEDORVOIDED,
  oRDERCOMPLETEDORVOIDEDSchema,
} from '../oRDERCOMPLETEDORVOIDED';
import { ORDEREXPIRED, oRDEREXPIREDSchema } from '../oRDEREXPIRED';
import { ORDERNOTAPPROVED, oRDERNOTAPPROVEDSchema } from '../oRDERNOTAPPROVED';
import {
  PAYEEBLOCKEDTRANSACTIONERROR,
  pAYEEBLOCKEDTRANSACTIONERRORSchema,
} from '../pAYEEBLOCKEDTRANSACTIONERROR';
import {
  PAYEEFXRATEIDEXPIREDERROR,
  pAYEEFXRATEIDEXPIREDERRORSchema,
} from '../pAYEEFXRATEIDEXPIREDERROR';
import {
  PAYERACCOUNTLOCKEDORCLOSEDERROR,
  pAYERACCOUNTLOCKEDORCLOSEDERRORSchema,
} from '../pAYERACCOUNTLOCKEDORCLOSEDERROR';
import {
  PAYERACCOUNTRESTRICTEDERROR,
  pAYERACCOUNTRESTRICTEDERRORSchema,
} from '../pAYERACCOUNTRESTRICTEDERROR';
import {
  PAYERACTIONREQUIRED,
  pAYERACTIONREQUIREDSchema,
} from '../pAYERACTIONREQUIRED';
import {
  PAYERCANNOTPAYERROR,
  pAYERCANNOTPAYERRORSchema,
} from '../pAYERCANNOTPAYERROR';
import {
  PAYMENTSOURCEMISMATCHERROR,
  pAYMENTSOURCEMISMATCHERRORSchema,
} from '../pAYMENTSOURCEMISMATCHERROR';
import {
  PAYMENTTYPENOTSUPPORTEDFORINTENT,
  pAYMENTTYPENOTSUPPORTEDFORINTENTSchema,
} from '../pAYMENTTYPENOTSUPPORTEDFORINTENT';
import { PAYPALIDERROR, pAYPALIDERRORSchema } from '../pAYPALIDERROR';
import {
  PAYPALTRANSACTIONIDEXPIRED,
  pAYPALTRANSACTIONIDEXPIREDSchema,
} from '../pAYPALTRANSACTIONIDEXPIRED';
import {
  PAYPALTRANSACTIONIDNOTFOUNDRESULT,
  pAYPALTRANSACTIONIDNOTFOUNDRESULTSchema,
} from '../pAYPALTRANSACTIONIDNOTFOUNDRESULT';
import { PNREFEXPIRED, pNREFEXPIREDSchema } from '../pNREFEXPIRED';
import {
  PNREFNOTFOUNDRESULT,
  pNREFNOTFOUNDRESULTSchema,
} from '../pNREFNOTFOUNDRESULT';
import {
  PREFERREDPAYMENTSOURCEMISMATCH,
  pREFERREDPAYMENTSOURCEMISMATCHSchema,
} from '../pREFERREDPAYMENTSOURCEMISMATCH';
import {
  PREVIOUSTRANSACTIONREFERENCEVOIDEDERROR,
  pREVIOUSTRANSACTIONREFERENCEVOIDEDERRORSchema,
} from '../pREVIOUSTRANSACTIONREFERENCEVOIDEDERROR';
import {
  REFERENCEDCARDEXPIRED,
  rEFERENCEDCARDEXPIREDSchema,
} from '../rEFERENCEDCARDEXPIRED';
import {
  RETURNURLREQUIREDERROR,
  rETURNURLREQUIREDERRORSchema,
} from '../rETURNURLREQUIREDERROR';
import {
  SAVEORDERNOTSUPPORTED,
  sAVEORDERNOTSUPPORTEDSchema,
} from '../sAVEORDERNOTSUPPORTED';
import {
  SHIPPINGADDRESSINVALIDRESULT,
  sHIPPINGADDRESSINVALIDRESULTSchema,
} from '../sHIPPINGADDRESSINVALIDRESULT';
import {
  TOKENEXPIREDRESULT,
  tOKENEXPIREDRESULTSchema,
} from '../tOKENEXPIREDRESULT';
import { TOKENIDNOTFOUND, tOKENIDNOTFOUNDSchema } from '../tOKENIDNOTFOUND';
import {
  TRANSACTIONLIMITEXCEEDEDERROR,
  tRANSACTIONLIMITEXCEEDEDERRORSchema,
} from '../tRANSACTIONLIMITEXCEEDEDERROR';
import {
  TRANSACTIONRECEIVINGLIMITEXCEEDEDERROR,
  tRANSACTIONRECEIVINGLIMITEXCEEDEDERRORSchema,
} from '../tRANSACTIONRECEIVINGLIMITEXCEEDEDERROR';
import {
  TRANSACTIONREFUSEDERROR,
  tRANSACTIONREFUSEDERRORSchema,
} from '../tRANSACTIONREFUSEDERROR';
import {
  UNSUPPORTEDINTENTFORPAYMENTSOURCE,
  uNSUPPORTEDINTENTFORPAYMENTSOURCESchema,
} from '../uNSUPPORTEDINTENTFORPAYMENTSOURCE';
import {
  VAULTINSTRUCTIONREQUIREDRESULT,
  vAULTINSTRUCTIONREQUIREDRESULTSchema,
} from '../vAULTINSTRUCTIONREQUIREDRESULT';

/** This is a container type for any-of types. */
export type OrdersAuthorize422IssuesItems = ACTIONDOESNOTMATCHINTENT | AGREEMENTALREADYCANCELLEDERROR | BILLINGAGREEMENTNOTFOUNDERROR | MISSINGPREVIOUSREFERENCERESULT | MISSINGCRYPTOGRAMRESULT | CARDBRANDNOTSUPPORTED | DECLINEDDUETORELATEDTXN | DOMESTICTRANSACTIONREQUIREDERROR | DUPLICATEINVOICEIDERROR | ORDERNOTAPPROVED | MAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERROR | PAYEEBLOCKEDTRANSACTIONERROR | PAYEEFXRATEIDEXPIREDERROR | UNSUPPORTEDINTENTFORPAYMENTSOURCE | PAYERACCOUNTLOCKEDORCLOSEDERROR | PAYERACCOUNTRESTRICTEDERROR | PAYERCANNOTPAYERROR | PAYPALTRANSACTIONIDEXPIRED | PNREFEXPIRED | REFERENCEDCARDEXPIRED | TOKENEXPIREDRESULT | TOKENIDNOTFOUND | TRANSACTIONLIMITEXCEEDEDERROR | TRANSACTIONRECEIVINGLIMITEXCEEDEDERROR | TRANSACTIONREFUSEDERROR | ORDERALREADYAUTHORIZEDERROR | AUTHCAPTURENOTENABLEDERROR | AMOUNTCANNOTBESPECIFIED | AUTHORIZATIONAMOUNTEXCEEDED | AUTHORIZATIONCURRENCYMISMATCH | MAXAUTHORIZATIONCOUNTEXCEEDED | ORDERCOMPLETEDORVOIDED | ORDEREXPIRED | INVALIDPICKUPADDRESS | SHIPPINGADDRESSINVALIDRESULT | PAYMENTTYPENOTSUPPORTEDFORINTENT | BILLINGAGREEMENTIDMISMATCH | PREFERREDPAYMENTSOURCEMISMATCH | INCOMPATIBLEPARAMETERVALUERESULT | INVALIDPREVIOUSTRANSACTIONREFERENCEERROR | CHARGEBACKONPREVIOUSTRANSACTIONERROR | PREVIOUSTRANSACTIONREFERENCEVOIDEDERROR | PAYMENTSOURCEMISMATCHERROR | MERCHANTINITIATEDWITHSECURITYCODEERROR | MERCHANTAUTHRESULTSERROR | MULTIPURCHASEUNITSERROR | RETURNURLREQUIREDERROR | CANCELURLREQUIREDERROR | PAYERACTIONREQUIRED | APPLEPAYAMOUNTMISMATCHRESULT | CARDNUMBERREQUIREDERROR | CARDEXPIRYREQUIREDERROR | VAULTINSTRUCTIONREQUIREDRESULT | MISMATCHEDVAULTIDTOPAYMENTSOURCERESULT | ORDERCANNOTBESAVED | SAVEORDERNOTSUPPORTED | NOTELIGIBLEFORPNREFPROCESSINGRESULT | PAYPALIDERROR | PAYPALTRANSACTIONIDNOTFOUNDRESULT | PNREFNOTFOUNDRESULT | INVALIDSECURITYCODELENGTHRESULT | MISSINGPAYMENTPARAMETER;

export const ordersAuthorize422IssuesItemsSchema: Schema<OrdersAuthorize422IssuesItems> = anyOf(
  [
    aCTIONDOESNOTMATCHINTENTSchema,
    aGREEMENTALREADYCANCELLEDERRORSchema,
    bILLINGAGREEMENTNOTFOUNDERRORSchema,
    mISSINGPREVIOUSREFERENCERESULTSchema,
    mISSINGCRYPTOGRAMRESULTSchema,
    cARDBRANDNOTSUPPORTEDSchema,
    dECLINEDDUETORELATEDTXNSchema,
    dOMESTICTRANSACTIONREQUIREDERRORSchema,
    dUPLICATEINVOICEIDERRORSchema,
    oRDERNOTAPPROVEDSchema,
    mAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERRORSchema,
    pAYEEBLOCKEDTRANSACTIONERRORSchema,
    pAYEEFXRATEIDEXPIREDERRORSchema,
    uNSUPPORTEDINTENTFORPAYMENTSOURCESchema,
    pAYERACCOUNTLOCKEDORCLOSEDERRORSchema,
    pAYERACCOUNTRESTRICTEDERRORSchema,
    pAYERCANNOTPAYERRORSchema,
    pAYPALTRANSACTIONIDEXPIREDSchema,
    pNREFEXPIREDSchema,
    rEFERENCEDCARDEXPIREDSchema,
    tOKENEXPIREDRESULTSchema,
    tOKENIDNOTFOUNDSchema,
    tRANSACTIONLIMITEXCEEDEDERRORSchema,
    tRANSACTIONRECEIVINGLIMITEXCEEDEDERRORSchema,
    tRANSACTIONREFUSEDERRORSchema,
    oRDERALREADYAUTHORIZEDERRORSchema,
    aUTHCAPTURENOTENABLEDERRORSchema,
    aMOUNTCANNOTBESPECIFIEDSchema,
    aUTHORIZATIONAMOUNTEXCEEDEDSchema,
    aUTHORIZATIONCURRENCYMISMATCHSchema,
    mAXAUTHORIZATIONCOUNTEXCEEDEDSchema,
    oRDERCOMPLETEDORVOIDEDSchema,
    oRDEREXPIREDSchema,
    iNVALIDPICKUPADDRESSSchema,
    sHIPPINGADDRESSINVALIDRESULTSchema,
    pAYMENTTYPENOTSUPPORTEDFORINTENTSchema,
    bILLINGAGREEMENTIDMISMATCHSchema,
    pREFERREDPAYMENTSOURCEMISMATCHSchema,
    iNCOMPATIBLEPARAMETERVALUERESULTSchema,
    iNVALIDPREVIOUSTRANSACTIONREFERENCEERRORSchema,
    cHARGEBACKONPREVIOUSTRANSACTIONERRORSchema,
    pREVIOUSTRANSACTIONREFERENCEVOIDEDERRORSchema,
    pAYMENTSOURCEMISMATCHERRORSchema,
    mERCHANTINITIATEDWITHSECURITYCODEERRORSchema,
    mERCHANTAUTHRESULTSERRORSchema,
    mULTIPURCHASEUNITSERRORSchema,
    rETURNURLREQUIREDERRORSchema,
    cANCELURLREQUIREDERRORSchema,
    pAYERACTIONREQUIREDSchema,
    aPPLEPAYAMOUNTMISMATCHRESULTSchema,
    cARDNUMBERREQUIREDERRORSchema,
    cARDEXPIRYREQUIREDERRORSchema,
    vAULTINSTRUCTIONREQUIREDRESULTSchema,
    mISMATCHEDVAULTIDTOPAYMENTSOURCERESULTSchema,
    oRDERCANNOTBESAVEDSchema,
    sAVEORDERNOTSUPPORTEDSchema,
    nOTELIGIBLEFORPNREFPROCESSINGRESULTSchema,
    pAYPALIDERRORSchema,
    pAYPALTRANSACTIONIDNOTFOUNDRESULTSchema,
    pNREFNOTFOUNDRESULTSchema,
    iNVALIDSECURITYCODELENGTHRESULTSchema,
    mISSINGPAYMENTPARAMETERSchema,
  ]
);

export namespace OrdersAuthorize422IssuesItems {
  /**
  * Validation method to narrow down union type to ACTIONDOESNOTMATCHINTENT type case.
  *
  * This is ACTION_DOES_NOT_MATCH_INTENT case.
  */
  export function isACTIONDOESNOTMATCHINTENT(value: unknown): value is ACTIONDOESNOTMATCHINTENT {
    const validationResult = validateAndMap(value, aCTIONDOESNOTMATCHINTENTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AGREEMENTALREADYCANCELLEDERROR type case.
  *
  * This is AGREEMENT_ALREADY_CANCELLED_ERROR case.
  */
  export function isAGREEMENTALREADYCANCELLEDERROR(value: unknown): value is AGREEMENTALREADYCANCELLEDERROR {
    const validationResult = validateAndMap(value, aGREEMENTALREADYCANCELLEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to BILLINGAGREEMENTNOTFOUNDERROR type case.
  *
  * This is BILLING_AGREEMENT_NOT_FOUND_ERROR case.
  */
  export function isBILLINGAGREEMENTNOTFOUNDERROR(value: unknown): value is BILLINGAGREEMENTNOTFOUNDERROR {
    const validationResult = validateAndMap(value, bILLINGAGREEMENTNOTFOUNDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MISSINGPREVIOUSREFERENCERESULT type case.
  *
  * This is MISSING_PREVIOUS_REFERENCE_RESULT case.
  */
  export function isMISSINGPREVIOUSREFERENCERESULT(value: unknown): value is MISSINGPREVIOUSREFERENCERESULT {
    const validationResult = validateAndMap(value, mISSINGPREVIOUSREFERENCERESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MISSINGCRYPTOGRAMRESULT type case.
  *
  * This is MISSING_CRYPTOGRAM_RESULT case.
  */
  export function isMISSINGCRYPTOGRAMRESULT(value: unknown): value is MISSINGCRYPTOGRAMRESULT {
    const validationResult = validateAndMap(value, mISSINGCRYPTOGRAMRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CARDBRANDNOTSUPPORTED type case.
  *
  * This is CARD_BRAND_NOT_SUPPORTED case.
  */
  export function isCARDBRANDNOTSUPPORTED(value: unknown): value is CARDBRANDNOTSUPPORTED {
    const validationResult = validateAndMap(value, cARDBRANDNOTSUPPORTEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to DECLINEDDUETORELATEDTXN type case.
  *
  * This is DECLINED_DUE_TO_RELATED_TXN case.
  */
  export function isDECLINEDDUETORELATEDTXN(value: unknown): value is DECLINEDDUETORELATEDTXN {
    const validationResult = validateAndMap(value, dECLINEDDUETORELATEDTXNSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to DOMESTICTRANSACTIONREQUIREDERROR type case.
  *
  * This is DOMESTIC_TRANSACTION_REQUIRED_ERROR case.
  */
  export function isDOMESTICTRANSACTIONREQUIREDERROR(value: unknown): value is DOMESTICTRANSACTIONREQUIREDERROR {
    const validationResult = validateAndMap(value, dOMESTICTRANSACTIONREQUIREDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to DUPLICATEINVOICEIDERROR type case.
  *
  * This is DUPLICATE_INVOICE_ID_ERROR case.
  */
  export function isDUPLICATEINVOICEIDERROR(value: unknown): value is DUPLICATEINVOICEIDERROR {
    const validationResult = validateAndMap(value, dUPLICATEINVOICEIDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ORDERNOTAPPROVED type case.
  *
  * This is ORDER_NOT_APPROVED case.
  */
  export function isORDERNOTAPPROVED(value: unknown): value is ORDERNOTAPPROVED {
    const validationResult = validateAndMap(value, oRDERNOTAPPROVEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERROR type case.
  *
  * This is MAX_NUMBER_OF_PAYMENT_ATTEMPTS_EXCEEDED_ERROR case.
  */
  export function isMAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERROR(value: unknown): value is MAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERROR {
    const validationResult = validateAndMap(value, mAXNUMBEROFPAYMENTATTEMPTSEXCEEDEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYEEBLOCKEDTRANSACTIONERROR type case.
  *
  * This is PAYEE_BLOCKED_TRANSACTION_ERROR case.
  */
  export function isPAYEEBLOCKEDTRANSACTIONERROR(value: unknown): value is PAYEEBLOCKEDTRANSACTIONERROR {
    const validationResult = validateAndMap(value, pAYEEBLOCKEDTRANSACTIONERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYEEFXRATEIDEXPIREDERROR type case.
  *
  * This is PAYEE_FX_RATE_ID_EXPIRED_ERROR case.
  */
  export function isPAYEEFXRATEIDEXPIREDERROR(value: unknown): value is PAYEEFXRATEIDEXPIREDERROR {
    const validationResult = validateAndMap(value, pAYEEFXRATEIDEXPIREDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to UNSUPPORTEDINTENTFORPAYMENTSOURCE type case.
  *
  * This is UNSUPPORTED_INTENT_FOR_PAYMENT_SOURCE case.
  */
  export function isUNSUPPORTEDINTENTFORPAYMENTSOURCE(value: unknown): value is UNSUPPORTEDINTENTFORPAYMENTSOURCE {
    const validationResult = validateAndMap(value, uNSUPPORTEDINTENTFORPAYMENTSOURCESchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYERACCOUNTLOCKEDORCLOSEDERROR type case.
  *
  * This is PAYER_ACCOUNT_LOCKED_OR_CLOSED_ERROR case.
  */
  export function isPAYERACCOUNTLOCKEDORCLOSEDERROR(value: unknown): value is PAYERACCOUNTLOCKEDORCLOSEDERROR {
    const validationResult = validateAndMap(value, pAYERACCOUNTLOCKEDORCLOSEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYERACCOUNTRESTRICTEDERROR type case.
  *
  * This is PAYER_ACCOUNT_RESTRICTED_ERROR case.
  */
  export function isPAYERACCOUNTRESTRICTEDERROR(value: unknown): value is PAYERACCOUNTRESTRICTEDERROR {
    const validationResult = validateAndMap(value, pAYERACCOUNTRESTRICTEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYERCANNOTPAYERROR type case.
  *
  * This is PAYER_CANNOT_PAY_ERROR case.
  */
  export function isPAYERCANNOTPAYERROR(value: unknown): value is PAYERCANNOTPAYERROR {
    const validationResult = validateAndMap(value, pAYERCANNOTPAYERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYPALTRANSACTIONIDEXPIRED type case.
  *
  * This is PAYPAL_TRANSACTION_ID_EXPIRED case.
  */
  export function isPAYPALTRANSACTIONIDEXPIRED(value: unknown): value is PAYPALTRANSACTIONIDEXPIRED {
    const validationResult = validateAndMap(value, pAYPALTRANSACTIONIDEXPIREDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PNREFEXPIRED type case.
  *
  * This is PNREF_EXPIRED case.
  */
  export function isPNREFEXPIRED(value: unknown): value is PNREFEXPIRED {
    const validationResult = validateAndMap(value, pNREFEXPIREDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to REFERENCEDCARDEXPIRED type case.
  *
  * This is REFERENCED_CARD_EXPIRED case.
  */
  export function isREFERENCEDCARDEXPIRED(value: unknown): value is REFERENCEDCARDEXPIRED {
    const validationResult = validateAndMap(value, rEFERENCEDCARDEXPIREDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to TOKENEXPIREDRESULT type case.
  *
  * This is TOKEN_EXPIRED_RESULT case.
  */
  export function isTOKENEXPIREDRESULT(value: unknown): value is TOKENEXPIREDRESULT {
    const validationResult = validateAndMap(value, tOKENEXPIREDRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to TOKENIDNOTFOUND type case.
  *
  * This is TOKEN_ID_NOT_FOUND case.
  */
  export function isTOKENIDNOTFOUND(value: unknown): value is TOKENIDNOTFOUND {
    const validationResult = validateAndMap(value, tOKENIDNOTFOUNDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to TRANSACTIONLIMITEXCEEDEDERROR type case.
  *
  * This is TRANSACTION_LIMIT_EXCEEDED_ERROR case.
  */
  export function isTRANSACTIONLIMITEXCEEDEDERROR(value: unknown): value is TRANSACTIONLIMITEXCEEDEDERROR {
    const validationResult = validateAndMap(value, tRANSACTIONLIMITEXCEEDEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to TRANSACTIONRECEIVINGLIMITEXCEEDEDERROR type case.
  *
  * This is TRANSACTION_RECEIVING_LIMIT_EXCEEDED_ERROR case.
  */
  export function isTRANSACTIONRECEIVINGLIMITEXCEEDEDERROR(value: unknown): value is TRANSACTIONRECEIVINGLIMITEXCEEDEDERROR {
    const validationResult = validateAndMap(value, tRANSACTIONRECEIVINGLIMITEXCEEDEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to TRANSACTIONREFUSEDERROR type case.
  *
  * This is TRANSACTION_REFUSED_ERROR case.
  */
  export function isTRANSACTIONREFUSEDERROR(value: unknown): value is TRANSACTIONREFUSEDERROR {
    const validationResult = validateAndMap(value, tRANSACTIONREFUSEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ORDERALREADYAUTHORIZEDERROR type case.
  *
  * This is ORDER_ALREADY_AUTHORIZED_ERROR case.
  */
  export function isORDERALREADYAUTHORIZEDERROR(value: unknown): value is ORDERALREADYAUTHORIZEDERROR {
    const validationResult = validateAndMap(value, oRDERALREADYAUTHORIZEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AUTHCAPTURENOTENABLEDERROR type case.
  *
  * This is AUTH_CAPTURE_NOT_ENABLED_ERROR case.
  */
  export function isAUTHCAPTURENOTENABLEDERROR(value: unknown): value is AUTHCAPTURENOTENABLEDERROR {
    const validationResult = validateAndMap(value, aUTHCAPTURENOTENABLEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AMOUNTCANNOTBESPECIFIED type case.
  *
  * This is AMOUNT_CANNOT_BE_SPECIFIED case.
  */
  export function isAMOUNTCANNOTBESPECIFIED(value: unknown): value is AMOUNTCANNOTBESPECIFIED {
    const validationResult = validateAndMap(value, aMOUNTCANNOTBESPECIFIEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AUTHORIZATIONAMOUNTEXCEEDED type case.
  *
  * This is AUTHORIZATION_AMOUNT_EXCEEDED case.
  */
  export function isAUTHORIZATIONAMOUNTEXCEEDED(value: unknown): value is AUTHORIZATIONAMOUNTEXCEEDED {
    const validationResult = validateAndMap(value, aUTHORIZATIONAMOUNTEXCEEDEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to AUTHORIZATIONCURRENCYMISMATCH type case.
  *
  * This is AUTHORIZATION_CURRENCY_MISMATCH case.
  */
  export function isAUTHORIZATIONCURRENCYMISMATCH(value: unknown): value is AUTHORIZATIONCURRENCYMISMATCH {
    const validationResult = validateAndMap(value, aUTHORIZATIONCURRENCYMISMATCHSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MAXAUTHORIZATIONCOUNTEXCEEDED type case.
  *
  * This is MAX_AUTHORIZATION_COUNT_EXCEEDED case.
  */
  export function isMAXAUTHORIZATIONCOUNTEXCEEDED(value: unknown): value is MAXAUTHORIZATIONCOUNTEXCEEDED {
    const validationResult = validateAndMap(value, mAXAUTHORIZATIONCOUNTEXCEEDEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ORDERCOMPLETEDORVOIDED type case.
  *
  * This is ORDER_COMPLETED_OR_VOIDED case.
  */
  export function isORDERCOMPLETEDORVOIDED(value: unknown): value is ORDERCOMPLETEDORVOIDED {
    const validationResult = validateAndMap(value, oRDERCOMPLETEDORVOIDEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ORDEREXPIRED type case.
  *
  * This is ORDER_EXPIRED case.
  */
  export function isORDEREXPIRED(value: unknown): value is ORDEREXPIRED {
    const validationResult = validateAndMap(value, oRDEREXPIREDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to INVALIDPICKUPADDRESS type case.
  *
  * This is INVALID_PICKUP_ADDRESS case.
  */
  export function isINVALIDPICKUPADDRESS(value: unknown): value is INVALIDPICKUPADDRESS {
    const validationResult = validateAndMap(value, iNVALIDPICKUPADDRESSSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to SHIPPINGADDRESSINVALIDRESULT type case.
  *
  * This is SHIPPING_ADDRESS_INVALID_RESULT case.
  */
  export function isSHIPPINGADDRESSINVALIDRESULT(value: unknown): value is SHIPPINGADDRESSINVALIDRESULT {
    const validationResult = validateAndMap(value, sHIPPINGADDRESSINVALIDRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYMENTTYPENOTSUPPORTEDFORINTENT type case.
  *
  * This is PAYMENT_TYPE_NOT_SUPPORTED_FOR_INTENT case.
  */
  export function isPAYMENTTYPENOTSUPPORTEDFORINTENT(value: unknown): value is PAYMENTTYPENOTSUPPORTEDFORINTENT {
    const validationResult = validateAndMap(value, pAYMENTTYPENOTSUPPORTEDFORINTENTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to BILLINGAGREEMENTIDMISMATCH type case.
  *
  * This is BILLING_AGREEMENT_ID_MISMATCH case.
  */
  export function isBILLINGAGREEMENTIDMISMATCH(value: unknown): value is BILLINGAGREEMENTIDMISMATCH {
    const validationResult = validateAndMap(value, bILLINGAGREEMENTIDMISMATCHSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PREFERREDPAYMENTSOURCEMISMATCH type case.
  *
  * This is PREFERRED_PAYMENT_SOURCE_MISMATCH case.
  */
  export function isPREFERREDPAYMENTSOURCEMISMATCH(value: unknown): value is PREFERREDPAYMENTSOURCEMISMATCH {
    const validationResult = validateAndMap(value, pREFERREDPAYMENTSOURCEMISMATCHSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to INCOMPATIBLEPARAMETERVALUERESULT type case.
  *
  * This is INCOMPATIBLE_PARAMETER_VALUE_RESULT case.
  */
  export function isINCOMPATIBLEPARAMETERVALUERESULT(value: unknown): value is INCOMPATIBLEPARAMETERVALUERESULT {
    const validationResult = validateAndMap(value, iNCOMPATIBLEPARAMETERVALUERESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to INVALIDPREVIOUSTRANSACTIONREFERENCEERROR type case.
  *
  * This is INVALID_PREVIOUS_TRANSACTION_REFERENCE_ERROR case.
  */
  export function isINVALIDPREVIOUSTRANSACTIONREFERENCEERROR(value: unknown): value is INVALIDPREVIOUSTRANSACTIONREFERENCEERROR {
    const validationResult = validateAndMap(value, iNVALIDPREVIOUSTRANSACTIONREFERENCEERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CHARGEBACKONPREVIOUSTRANSACTIONERROR type case.
  *
  * This is CHARGEBACK_ON_PREVIOUS_TRANSACTION_ERROR case.
  */
  export function isCHARGEBACKONPREVIOUSTRANSACTIONERROR(value: unknown): value is CHARGEBACKONPREVIOUSTRANSACTIONERROR {
    const validationResult = validateAndMap(value, cHARGEBACKONPREVIOUSTRANSACTIONERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PREVIOUSTRANSACTIONREFERENCEVOIDEDERROR type case.
  *
  * This is PREVIOUS_TRANSACTION_REFERENCE_VOIDED_ERROR case.
  */
  export function isPREVIOUSTRANSACTIONREFERENCEVOIDEDERROR(value: unknown): value is PREVIOUSTRANSACTIONREFERENCEVOIDEDERROR {
    const validationResult = validateAndMap(value, pREVIOUSTRANSACTIONREFERENCEVOIDEDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYMENTSOURCEMISMATCHERROR type case.
  *
  * This is PAYMENT_SOURCE_MISMATCH_ERROR case.
  */
  export function isPAYMENTSOURCEMISMATCHERROR(value: unknown): value is PAYMENTSOURCEMISMATCHERROR {
    const validationResult = validateAndMap(value, pAYMENTSOURCEMISMATCHERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MERCHANTINITIATEDWITHSECURITYCODEERROR type case.
  *
  * This is MERCHANT_INITIATED_WITH_SECURITY_CODE_ERROR case.
  */
  export function isMERCHANTINITIATEDWITHSECURITYCODEERROR(value: unknown): value is MERCHANTINITIATEDWITHSECURITYCODEERROR {
    const validationResult = validateAndMap(value, mERCHANTINITIATEDWITHSECURITYCODEERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MERCHANTAUTHRESULTSERROR type case.
  *
  * This is MERCHANT_AUTH_RESULTS_ERROR case.
  */
  export function isMERCHANTAUTHRESULTSERROR(value: unknown): value is MERCHANTAUTHRESULTSERROR {
    const validationResult = validateAndMap(value, mERCHANTAUTHRESULTSERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MULTIPURCHASEUNITSERROR type case.
  *
  * This is MULTI_PURCHASE_UNITS_ERROR case.
  */
  export function isMULTIPURCHASEUNITSERROR(value: unknown): value is MULTIPURCHASEUNITSERROR {
    const validationResult = validateAndMap(value, mULTIPURCHASEUNITSERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to RETURNURLREQUIREDERROR type case.
  *
  * This is RETURN_URL_REQUIRED_ERROR case.
  */
  export function isRETURNURLREQUIREDERROR(value: unknown): value is RETURNURLREQUIREDERROR {
    const validationResult = validateAndMap(value, rETURNURLREQUIREDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CANCELURLREQUIREDERROR type case.
  *
  * This is CANCEL_URL_REQUIRED_ERROR case.
  */
  export function isCANCELURLREQUIREDERROR(value: unknown): value is CANCELURLREQUIREDERROR {
    const validationResult = validateAndMap(value, cANCELURLREQUIREDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYERACTIONREQUIRED type case.
  *
  * This is PAYER_ACTION_REQUIRED case.
  */
  export function isPAYERACTIONREQUIRED(value: unknown): value is PAYERACTIONREQUIRED {
    const validationResult = validateAndMap(value, pAYERACTIONREQUIREDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to APPLEPAYAMOUNTMISMATCHRESULT type case.
  *
  * This is APPLE_PAY_AMOUNT_MISMATCH_RESULT case.
  */
  export function isAPPLEPAYAMOUNTMISMATCHRESULT(value: unknown): value is APPLEPAYAMOUNTMISMATCHRESULT {
    const validationResult = validateAndMap(value, aPPLEPAYAMOUNTMISMATCHRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CARDNUMBERREQUIREDERROR type case.
  *
  * This is CARD_NUMBER_REQUIRED_ERROR case.
  */
  export function isCARDNUMBERREQUIREDERROR(value: unknown): value is CARDNUMBERREQUIREDERROR {
    const validationResult = validateAndMap(value, cARDNUMBERREQUIREDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CARDEXPIRYREQUIREDERROR type case.
  *
  * This is CARD_EXPIRY_REQUIRED_ERROR case.
  */
  export function isCARDEXPIRYREQUIREDERROR(value: unknown): value is CARDEXPIRYREQUIREDERROR {
    const validationResult = validateAndMap(value, cARDEXPIRYREQUIREDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to VAULTINSTRUCTIONREQUIREDRESULT type case.
  *
  * This is VAULT_INSTRUCTION_REQUIRED_RESULT case.
  */
  export function isVAULTINSTRUCTIONREQUIREDRESULT(value: unknown): value is VAULTINSTRUCTIONREQUIREDRESULT {
    const validationResult = validateAndMap(value, vAULTINSTRUCTIONREQUIREDRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MISMATCHEDVAULTIDTOPAYMENTSOURCERESULT type case.
  *
  * This is MISMATCHED_VAULT_ID_TO_PAYMENT_SOURCE_RESULT case.
  */
  export function isMISMATCHEDVAULTIDTOPAYMENTSOURCERESULT(value: unknown): value is MISMATCHEDVAULTIDTOPAYMENTSOURCERESULT {
    const validationResult = validateAndMap(value, mISMATCHEDVAULTIDTOPAYMENTSOURCERESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ORDERCANNOTBESAVED type case.
  *
  * This is ORDER_CANNOT_BE_SAVED case.
  */
  export function isORDERCANNOTBESAVED(value: unknown): value is ORDERCANNOTBESAVED {
    const validationResult = validateAndMap(value, oRDERCANNOTBESAVEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to SAVEORDERNOTSUPPORTED type case.
  *
  * This is SAVE_ORDER_NOT_SUPPORTED case.
  */
  export function isSAVEORDERNOTSUPPORTED(value: unknown): value is SAVEORDERNOTSUPPORTED {
    const validationResult = validateAndMap(value, sAVEORDERNOTSUPPORTEDSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to NOTELIGIBLEFORPNREFPROCESSINGRESULT type case.
  *
  * This is NOT_ELIGIBLE_FOR_PNREF_PROCESSING_RESULT case.
  */
  export function isNOTELIGIBLEFORPNREFPROCESSINGRESULT(value: unknown): value is NOTELIGIBLEFORPNREFPROCESSINGRESULT {
    const validationResult = validateAndMap(value, nOTELIGIBLEFORPNREFPROCESSINGRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYPALIDERROR type case.
  *
  * This is PAYPAL_ID_ERROR case.
  */
  export function isPAYPALIDERROR(value: unknown): value is PAYPALIDERROR {
    const validationResult = validateAndMap(value, pAYPALIDERRORSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PAYPALTRANSACTIONIDNOTFOUNDRESULT type case.
  *
  * This is PAYPAL_TRANSACTION_ID_NOT_FOUND_RESULT case.
  */
  export function isPAYPALTRANSACTIONIDNOTFOUNDRESULT(value: unknown): value is PAYPALTRANSACTIONIDNOTFOUNDRESULT {
    const validationResult = validateAndMap(value, pAYPALTRANSACTIONIDNOTFOUNDRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PNREFNOTFOUNDRESULT type case.
  *
  * This is PNREF_NOT_FOUND_RESULT case.
  */
  export function isPNREFNOTFOUNDRESULT(value: unknown): value is PNREFNOTFOUNDRESULT {
    const validationResult = validateAndMap(value, pNREFNOTFOUNDRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to INVALIDSECURITYCODELENGTHRESULT type case.
  *
  * This is INVALID_SECURITY_CODE_LENGTH_RESULT case.
  */
  export function isINVALIDSECURITYCODELENGTHRESULT(value: unknown): value is INVALIDSECURITYCODELENGTHRESULT {
    const validationResult = validateAndMap(value, iNVALIDSECURITYCODELENGTHRESULTSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MISSINGPAYMENTPARAMETER type case.
  *
  * This is MISSING_PAYMENT_PARAMETER case.
  */
  export function isMISSINGPAYMENTPARAMETER(value: unknown): value is MISSINGPAYMENTPARAMETER {
    const validationResult = validateAndMap(value, mISSINGPAYMENTPARAMETERSchema);
    return validationResult.errors === false;
  }
}
