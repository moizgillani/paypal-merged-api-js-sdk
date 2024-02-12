/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Information needed to pay using giropay. */
export interface AGiropayPaymentObject {
  /** The name of the account holder associated with this payment method. */
  name?: string;
  /** The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank. */
  countryCode?: string;
  /** The bank identification code (BIC). */
  bic?: string;
}

export const aGiropayPaymentObjectSchema: Schema<AGiropayPaymentObject> = object(
  {
    name: ['name', optional(string())],
    countryCode: ['country_code', optional(string())],
    bic: ['bic', optional(string())],
  }
);