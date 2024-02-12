/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Information used to pay using BLIK one-click flow. */
export interface BLIKOneClickPaymentInformation {
  /** 6-digit code used to authenticate a consumer within BLIK. */
  authCode?: string;
  /** The merchant generated, unique reference serving as a primary identifier for accounts connected between Blik and a merchant. */
  consumerReference: string;
  /** A bank defined identifier used as a display name to allow the payer to differentiate between multiple registered bank accounts. */
  aliasLabel?: string;
  /** A Blik-defined identifier for a specific Blik-enabled bank account that is associated with a given merchant. Used only in conjunction with a Consumer Reference. */
  aliasKey?: string;
}

export const bLIKOneClickPaymentInformationSchema: Schema<BLIKOneClickPaymentInformation> = object(
  {
    authCode: ['auth_code', optional(string())],
    consumerReference: ['consumer_reference', string()],
    aliasLabel: ['alias_label', optional(string())],
    aliasKey: ['alias_key', optional(string())],
  }
);