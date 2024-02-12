/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, unknown } from '../schema';
import {
  AGiropayPaymentInformation,
  aGiropayPaymentInformationSchema,
} from './aGiropayPaymentInformation';
import {
  AnEpsPaymentInformation,
  anEpsPaymentInformationSchema,
} from './anEpsPaymentInformation';
import {
  ApplePayPaymentRequestObject,
  applePayPaymentRequestObjectSchema,
} from './applePayPaymentRequestObject';
import {
  BancontactPaymentInformation,
  bancontactPaymentInformationSchema,
} from './bancontactPaymentInformation';
import {
  BLIKPaymentInformation,
  bLIKPaymentInformationSchema,
} from './bLIKPaymentInformation';
import { CardRequest, cardRequestSchema } from './cardRequest';
import {
  MyBankPaymentInformation,
  myBankPaymentInformationSchema,
} from './myBankPaymentInformation';
import {
  P24PaymentInformation,
  p24PaymentInformationSchema,
} from './p24PaymentInformation';
import { PayPalWallet, payPalWalletSchema } from './payPalWallet';
import {
  SofortPaymentInformation,
  sofortPaymentInformationSchema,
} from './sofortPaymentInformation';
import {
  TheIDEALPaymentInformation,
  theIDEALPaymentInformationSchema,
} from './theIDEALPaymentInformation';
import { Token, tokenSchema } from './token';
import {
  TrustlyPaymentInformation,
  trustlyPaymentInformationSchema,
} from './trustlyPaymentInformation';
import {
  VenmoPaymentRequestObject,
  venmoPaymentRequestObjectSchema,
} from './venmoPaymentRequestObject';

/** The payment source definition. */
export interface PaymentSourceDefinition {
  /** The payment card to use to fund a payment. Can be a credit or debit card.<blockquote><strong>Note:</strong> Passing card number, cvv and expiry directly via the API requires <a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment"> PCI SAQ D compliance</a>. <br>*PayPal offers a mechanism by which you do not have to take on the <strong>PCI SAQ D</strong> burden by using hosted fields - refer to <a href="https://developer.paypal.com/docs/checkout/advanced/integrate/">this Integration Guide</a>*.</blockquote> */
  card?: CardRequest;
  /** The tokenized payment source to fund a payment. */
  token?: Token;
  /** Indicates that PayPal Wallet is the payment source. Main use of this selection is to provide additional instructions associated with this choice like vaulting. */
  paypal?: PayPalWallet;
  /** Bancontact is the most popular online payment in Belgium. [More Details](https://www.bancontact.com/). */
  bancontact?: BancontactPaymentInformation;
  /** BLIK is a mobile payment system, created by Polish Payment Standard in order to allow millions of users to pay in shops, payout cash in ATMs and make online purchases and payments. [More Details](https://blikmobile.pl/). */
  blik?: BLIKPaymentInformation;
  /** The eps transfer is an online payment method developed by many Austrian banks. [More Details](https://www.eps-ueberweisung.at/). */
  eps?: AnEpsPaymentInformation;
  /** Giropay is an Internet payment System in Germany, based on online banking. [More Details](https://giropay.de/). */
  giropay?: AGiropayPaymentInformation;
  /** The Dutch payment method iDEAL is an online payment method that enables consumers to pay online through their own bank. [More Details](https://www.ideal.nl/). */
  ideal?: TheIDEALPaymentInformation;
  /** MyBank is an e-authorisation solution which enables safe digital payments and identity authentication through a consumer’s own online banking portal or mobile application. [More Details](https://www.mybank.eu/). */
  mybank?: MyBankPaymentInformation;
  /** P24 (Przelewy24) is a secure and fast online bank transfer service linked to all the major banks in Poland. [More Details](https://www.przelewy24.pl/). */
  p24?: P24PaymentInformation;
  /** SOFORT Banking is a real-time bank transfer payment method that buyers use to transfer funds directly to merchants from their bank accounts. [More Details](https://www.klarna.com/sofort/). */
  sofort?: SofortPaymentInformation;
  /** Trustly is a payment method that allows customers to shop and pay from their bank account. [More Details](https://www.trustly.net/). */
  trustly?: TrustlyPaymentInformation;
  /** ApplePay payment source, allows buyer to pay using ApplePay, both on Web as well as on Native. */
  applePay?: ApplePayPaymentRequestObject;
  /** Google Pay payment source, allows buyer to pay using Google Pay. */
  googlePay?: unknown;
  /** Information needed to indicate that Venmo is being used to fund the payment. */
  venmo?: VenmoPaymentRequestObject;
}

export const paymentSourceDefinitionSchema: Schema<PaymentSourceDefinition> = object(
  {
    card: ['card', optional(lazy(() => cardRequestSchema))],
    token: ['token', optional(lazy(() => tokenSchema))],
    paypal: ['paypal', optional(lazy(() => payPalWalletSchema))],
    bancontact: [
      'bancontact',
      optional(lazy(() => bancontactPaymentInformationSchema)),
    ],
    blik: ['blik', optional(lazy(() => bLIKPaymentInformationSchema))],
    eps: ['eps', optional(lazy(() => anEpsPaymentInformationSchema))],
    giropay: [
      'giropay',
      optional(lazy(() => aGiropayPaymentInformationSchema)),
    ],
    ideal: ['ideal', optional(lazy(() => theIDEALPaymentInformationSchema))],
    mybank: ['mybank', optional(lazy(() => myBankPaymentInformationSchema))],
    p24: ['p24', optional(lazy(() => p24PaymentInformationSchema))],
    sofort: ['sofort', optional(lazy(() => sofortPaymentInformationSchema))],
    trustly: ['trustly', optional(lazy(() => trustlyPaymentInformationSchema))],
    applePay: [
      'apple_pay',
      optional(lazy(() => applePayPaymentRequestObjectSchema)),
    ],
    googlePay: ['google_pay', optional(unknown())],
    venmo: ['venmo', optional(lazy(() => venmoPaymentRequestObjectSchema))],
  }
);