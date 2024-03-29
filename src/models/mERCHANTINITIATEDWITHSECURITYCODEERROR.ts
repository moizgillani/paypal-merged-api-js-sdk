/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MerchantInitiatedWithSecurityCode1DescriptionEnum,
  merchantInitiatedWithSecurityCode1DescriptionEnumSchema,
} from './merchantInitiatedWithSecurityCode1DescriptionEnum';
import {
  MerchantInitiatedWithSecurityCode1IssueEnum,
  merchantInitiatedWithSecurityCode1IssueEnumSchema,
} from './merchantInitiatedWithSecurityCode1IssueEnum';

export interface MERCHANTINITIATEDWITHSECURITYCODEERROR {
  issue?: MerchantInitiatedWithSecurityCode1IssueEnum;
  description?: MerchantInitiatedWithSecurityCode1DescriptionEnum;
}

export const mERCHANTINITIATEDWITHSECURITYCODEERRORSchema: Schema<MERCHANTINITIATEDWITHSECURITYCODEERROR> = object(
  {
    issue: [
      'issue',
      optional(merchantInitiatedWithSecurityCode1IssueEnumSchema),
    ],
    description: [
      'description',
      optional(merchantInitiatedWithSecurityCode1DescriptionEnumSchema),
    ],
  }
);
