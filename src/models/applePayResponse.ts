/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  CardPaymentMethodTokens,
  cardPaymentMethodTokensSchema,
} from './cardPaymentMethodTokens';

/** A resource representing a response for Apple Pay. */
export interface ApplePayResponse {
  /** Card data for the card linked to the apple pay token. */
  card?: CardPaymentMethodTokens;
}

export const applePayResponseSchema: Schema<ApplePayResponse> = object({
  card: ['card', optional(lazy(() => cardPaymentMethodTokensSchema))],
});
