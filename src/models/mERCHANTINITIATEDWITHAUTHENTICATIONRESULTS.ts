/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MerchantInitiatedAuthenticationResultsEnum,
  merchantInitiatedAuthenticationResultsEnumSchema,
} from './merchantInitiatedAuthenticationResultsEnum';
import {
  MerchInitAuthResultsDescEnum,
  merchInitAuthResultsDescEnumSchema,
} from './merchInitAuthResultsDescEnum';

export interface MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS {
  issue?: MerchantInitiatedAuthenticationResultsEnum;
  description?: MerchInitAuthResultsDescEnum;
}

export const mERCHANTINITIATEDWITHAUTHENTICATIONRESULTSSchema: Schema<MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS> = object(
  {
    issue: [
      'issue',
      optional(merchantInitiatedAuthenticationResultsEnumSchema),
    ],
    description: ['description', optional(merchInitAuthResultsDescEnumSchema)],
  }
);
