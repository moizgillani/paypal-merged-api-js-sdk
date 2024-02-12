/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ErrMerchInitAuthResults3dsInvalidDescEnum,
  errMerchInitAuthResults3dsInvalidDescEnumSchema,
} from './errMerchInitAuthResults3dsInvalidDescEnum';
import {
  MerchantInitiatedWithAuthResultsEnum,
  merchantInitiatedWithAuthResultsEnumSchema,
} from './merchantInitiatedWithAuthResultsEnum';

export interface MERCHANTINITIATEDAUTHRESULTSERRORRESPONSE {
  issue?: MerchantInitiatedWithAuthResultsEnum;
  description?: ErrMerchInitAuthResults3dsInvalidDescEnum;
}

export const mERCHANTINITIATEDAUTHRESULTSERRORRESPONSESchema: Schema<MERCHANTINITIATEDAUTHRESULTSERRORRESPONSE> = object(
  {
    issue: ['issue', optional(merchantInitiatedWithAuthResultsEnumSchema)],
    description: [
      'description',
      optional(errMerchInitAuthResults3dsInvalidDescEnumSchema),
    ],
  }
);