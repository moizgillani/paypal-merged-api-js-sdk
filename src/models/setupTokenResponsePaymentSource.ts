/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  CardResponsePaymentMethodTokens,
  cardResponsePaymentMethodTokensSchema,
} from './cardResponsePaymentMethodTokens';
import {
  PayPalWalletResponsePaymentMethodTokens,
  payPalWalletResponsePaymentMethodTokensSchema,
} from './payPalWalletResponsePaymentMethodTokens';
import { VenmoResponse, venmoResponseSchema } from './venmoResponse';

/** The setup payment method details. */
export interface SetupTokenResponsePaymentSource {
  /** Full representation of a Card Payment Token. */
  card?: CardResponsePaymentMethodTokens;
  /** Full representation of a PayPal Payment Token. */
  paypal?: PayPalWalletResponsePaymentMethodTokens;
  /** Full representation of a Venmo Payment Token. */
  venmo?: VenmoResponse;
}

export const setupTokenResponsePaymentSourceSchema: Schema<SetupTokenResponsePaymentSource> = object(
  {
    card: ['card', optional(lazy(() => cardResponsePaymentMethodTokensSchema))],
    paypal: [
      'paypal',
      optional(lazy(() => payPalWalletResponsePaymentMethodTokensSchema)),
    ],
    venmo: ['venmo', optional(lazy(() => venmoResponseSchema))],
  }
);
