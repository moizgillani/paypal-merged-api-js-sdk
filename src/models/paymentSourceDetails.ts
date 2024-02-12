/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AGiropayPaymentObject,
  aGiropayPaymentObjectSchema,
} from './aGiropayPaymentObject';
import {
  AnEpsPaymentObject,
  anEpsPaymentObjectSchema,
} from './anEpsPaymentObject';
import {
  BancontactPaymentObject,
  bancontactPaymentObjectSchema,
} from './bancontactPaymentObject';
import { BLIKPaymentObject, bLIKPaymentObjectSchema } from './bLIKPaymentObject';
import { CardResponse, cardResponseSchema } from './cardResponse';
import {
  MyBankPaymentObject,
  myBankPaymentObjectSchema,
} from './myBankPaymentObject';
import { P24PaymentObject, p24PaymentObjectSchema } from './p24PaymentObject';
import {
  PayPalWalletResponse,
  payPalWalletResponseSchema,
} from './payPalWalletResponse';
import {
  SofortPaymentObject,
  sofortPaymentObjectSchema,
} from './sofortPaymentObject';
import {
  TheIDEALPaymentObject,
  theIDEALPaymentObjectSchema,
} from './theIDEALPaymentObject';
import {
  TrustlyPaymentObject,
  trustlyPaymentObjectSchema,
} from './trustlyPaymentObject';
import {
  VenmoWalletResponseObject,
  venmoWalletResponseObjectSchema,
} from './venmoWalletResponseObject';

/** The payment source used to fund the payment. */
export interface PaymentSourceDetails {
  /** The payment card to use to fund a payment. Card can be a credit or debit card. */
  card?: CardResponse;
  /** The PayPal Wallet response. */
  paypal?: PayPalWalletResponse;
  /** Information used to pay Bancontact. */
  bancontact?: BancontactPaymentObject;
  /** Information used to pay using BLIK. */
  blik?: BLIKPaymentObject;
  /** Information used to pay using eps. */
  eps?: AnEpsPaymentObject;
  /** Information needed to pay using giropay. */
  giropay?: AGiropayPaymentObject;
  /** Information used to pay using iDEAL. */
  ideal?: TheIDEALPaymentObject;
  /** Information used to pay using MyBank. */
  mybank?: MyBankPaymentObject;
  /** Information used to pay using P24(Przelewy24). */
  p24?: P24PaymentObject;
  /** Information used to pay using Sofort. */
  sofort?: SofortPaymentObject;
  /** Information needed to pay using Trustly. */
  trustly?: TrustlyPaymentObject;
  /** Venmo wallet response. */
  venmo?: VenmoWalletResponseObject;
}

export const paymentSourceDetailsSchema: Schema<PaymentSourceDetails> = object({
  card: ['card', optional(lazy(() => cardResponseSchema))],
  paypal: ['paypal', optional(lazy(() => payPalWalletResponseSchema))],
  bancontact: [
    'bancontact',
    optional(lazy(() => bancontactPaymentObjectSchema)),
  ],
  blik: ['blik', optional(lazy(() => bLIKPaymentObjectSchema))],
  eps: ['eps', optional(lazy(() => anEpsPaymentObjectSchema))],
  giropay: ['giropay', optional(lazy(() => aGiropayPaymentObjectSchema))],
  ideal: ['ideal', optional(lazy(() => theIDEALPaymentObjectSchema))],
  mybank: ['mybank', optional(lazy(() => myBankPaymentObjectSchema))],
  p24: ['p24', optional(lazy(() => p24PaymentObjectSchema))],
  sofort: ['sofort', optional(lazy(() => sofortPaymentObjectSchema))],
  trustly: ['trustly', optional(lazy(() => trustlyPaymentObjectSchema))],
  venmo: ['venmo', optional(lazy(() => venmoWalletResponseObjectSchema))],
});
