/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  AuthenticationResponse,
  authenticationResponseSchema,
} from './authenticationResponse';
import { BinDetails, binDetailsSchema } from './binDetails';
import {
  CardAttributesResponse,
  cardAttributesResponseSchema,
} from './cardAttributesResponse';
import { CardBrandEnum, cardBrandEnumSchema } from './cardBrandEnum';
import {
  PaymentCardTypeEnum,
  paymentCardTypeEnumSchema,
} from './paymentCardTypeEnum';
import {
  ResponseOfCardFromRequest,
  responseOfCardFromRequestSchema,
} from './responseOfCardFromRequest';

/** The payment card to use to fund a payment. Card can be a credit or debit card. */
export interface CardResponse {
  /** The card holder's name as it appears on the card. */
  name?: string;
  /** The last digits of the payment card. */
  lastDigits?: string;
  /** The card brand or network. Typically used in the response. */
  brand?: CardBrandEnum;
  /** Array of brands or networks associated with the card. */
  availableNetworks?: CardBrandEnum[];
  /** The payment card type. */
  type?: PaymentCardTypeEnum;
  /** Results of Authentication such as 3D Secure. */
  authenticationResult?: AuthenticationResponse;
  /** Additional attributes associated with the use of this card. */
  attributes?: CardAttributesResponse;
  /** Representation of card details as received in the request. */
  fromRequest?: ResponseOfCardFromRequest;
  /** The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  expiry?: string;
  /** Bank Identification Number (BIN) details used to fund a payment. */
  binDetails?: BinDetails;
}

export const cardResponseSchema: Schema<CardResponse> = object({
  name: ['name', optional(string())],
  lastDigits: ['last_digits', optional(string())],
  brand: ['brand', optional(cardBrandEnumSchema)],
  availableNetworks: [
    'available_networks',
    optional(array(cardBrandEnumSchema)),
  ],
  type: ['type', optional(paymentCardTypeEnumSchema)],
  authenticationResult: [
    'authentication_result',
    optional(lazy(() => authenticationResponseSchema)),
  ],
  attributes: [
    'attributes',
    optional(lazy(() => cardAttributesResponseSchema)),
  ],
  fromRequest: [
    'from_request',
    optional(lazy(() => responseOfCardFromRequestSchema)),
  ],
  expiry: ['expiry', optional(string())],
  binDetails: ['bin_details', optional(lazy(() => binDetailsSchema))],
});