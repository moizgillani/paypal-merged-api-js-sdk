/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ErrMerchInitAuthResults3dsInvalidEnum,
  errMerchInitAuthResults3dsInvalidEnumSchema,
} from './errMerchInitAuthResults3dsInvalidEnum';
import {
  MerchantInitiatedAuthWithResultsEnum,
  merchantInitiatedAuthWithResultsEnumSchema,
} from './merchantInitiatedAuthWithResultsEnum';

export interface MERCHANTAUTHRESULTSERROR {
  issue?: MerchantInitiatedAuthWithResultsEnum;
  description?: ErrMerchInitAuthResults3dsInvalidEnum;
}

export const mERCHANTAUTHRESULTSERRORSchema: Schema<MERCHANTAUTHRESULTSERROR> = object(
  {
    issue: ['issue', optional(merchantInitiatedAuthWithResultsEnumSchema)],
    description: [
      'description',
      optional(errMerchInitAuthResults3dsInvalidEnumSchema),
    ],
  }
);
