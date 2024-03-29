/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MerchantInitiatedWithSecurityCodeDescriptionEnum,
  merchantInitiatedWithSecurityCodeDescriptionEnumSchema,
} from './merchantInitiatedWithSecurityCodeDescriptionEnum';
import {
  MerchantInitiatedWithSecurityCodeIssueEnum,
  merchantInitiatedWithSecurityCodeIssueEnumSchema,
} from './merchantInitiatedWithSecurityCodeIssueEnum';

export interface MERCHANTINITIATEDWITHSECURITYCODE {
  issue?: MerchantInitiatedWithSecurityCodeIssueEnum;
  description?: MerchantInitiatedWithSecurityCodeDescriptionEnum;
}

export const mERCHANTINITIATEDWITHSECURITYCODESchema: Schema<MERCHANTINITIATEDWITHSECURITYCODE> = object(
  {
    issue: [
      'issue',
      optional(merchantInitiatedWithSecurityCodeIssueEnumSchema),
    ],
    description: [
      'description',
      optional(merchantInitiatedWithSecurityCodeDescriptionEnumSchema),
    ],
  }
);
