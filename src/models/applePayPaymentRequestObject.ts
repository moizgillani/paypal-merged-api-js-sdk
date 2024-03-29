/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string, unknown } from '../schema';
import {
  DecryptedApplePayTokenData,
  decryptedApplePayTokenDataSchema,
} from './decryptedApplePayTokenData';
import { Phone, phoneSchema } from './phone';

/** Information needed to pay using ApplePay. */
export interface ApplePayPaymentRequestObject {
  /** ApplePay transaction identifier, this will be the unique identifier for this transaction provided by Apple. The pattern is defined by an external party and supports Unicode. */
  id?: string;
  /** The name of the account holder associated with this payment method. */
  name?: string;
  /** The email address of the account holder associated with this payment method. */
  emailAddress?: string;
  /** The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property. */
  phoneNumber?: Phone;
  /** The decrypted payload details for the apple pay token. */
  decryptedToken?: DecryptedApplePayTokenData;
  /** The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  storedCredential?: string;
  /** The PayPal-generated ID for the saved apple pay payment_source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions. */
  vaultId?: string;
  attributes?: unknown;
}

export const applePayPaymentRequestObjectSchema: Schema<ApplePayPaymentRequestObject> = object(
  {
    id: ['id', optional(string())],
    name: ['name', optional(string())],
    emailAddress: ['email_address', optional(string())],
    phoneNumber: ['phone_number', optional(lazy(() => phoneSchema))],
    decryptedToken: [
      'decrypted_token',
      optional(lazy(() => decryptedApplePayTokenDataSchema)),
    ],
    storedCredential: ['stored_credential', optional(string())],
    vaultId: ['vault_id', optional(string())],
    attributes: ['attributes', optional(unknown())],
  }
);
