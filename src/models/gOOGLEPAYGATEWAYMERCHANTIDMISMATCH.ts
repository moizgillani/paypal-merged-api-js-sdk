/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  GooglePayGatewayMerchantIdMismatchIssueEnum,
  googlePayGatewayMerchantIdMismatchIssueEnumSchema,
} from './googlePayGatewayMerchantIdMismatchIssueEnum';
import {
  InvalidGooglePayMerchantIdEnum,
  invalidGooglePayMerchantIdEnumSchema,
} from './invalidGooglePayMerchantIdEnum';

export interface GOOGLEPAYGATEWAYMERCHANTIDMISMATCH {
  issue?: GooglePayGatewayMerchantIdMismatchIssueEnum;
  description?: InvalidGooglePayMerchantIdEnum;
}

export const gOOGLEPAYGATEWAYMERCHANTIDMISMATCHSchema: Schema<GOOGLEPAYGATEWAYMERCHANTIDMISMATCH> = object(
  {
    issue: [
      'issue',
      optional(googlePayGatewayMerchantIdMismatchIssueEnumSchema),
    ],
    description: [
      'description',
      optional(invalidGooglePayMerchantIdEnumSchema),
    ],
  }
);