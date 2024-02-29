/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  GooglePayGatewayMerchantIdMismatch1IssueEnum,
  googlePayGatewayMerchantIdMismatch1IssueEnumSchema,
} from './googlePayGatewayMerchantIdMismatch1IssueEnum';
import {
  InvalidGooglePayMerchantIdMismatchEnum,
  invalidGooglePayMerchantIdMismatchEnumSchema,
} from './invalidGooglePayMerchantIdMismatchEnum';

export interface GOOGLEPAYGATEWAYMERCHANTIDMISMATCHERROR {
  issue?: GooglePayGatewayMerchantIdMismatch1IssueEnum;
  description?: InvalidGooglePayMerchantIdMismatchEnum;
}

export const gOOGLEPAYGATEWAYMERCHANTIDMISMATCHERRORSchema: Schema<GOOGLEPAYGATEWAYMERCHANTIDMISMATCHERROR> = object(
  {
    issue: [
      'issue',
      optional(googlePayGatewayMerchantIdMismatch1IssueEnumSchema),
    ],
    description: [
      'description',
      optional(invalidGooglePayMerchantIdMismatchEnumSchema),
    ],
  }
);
