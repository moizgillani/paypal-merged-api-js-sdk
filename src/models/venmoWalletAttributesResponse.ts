/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  SavedPaymentSourceResponse,
  savedPaymentSourceResponseSchema,
} from './savedPaymentSourceResponse';

/** Additional attributes associated with the use of a Venmo Wallet. */
export interface VenmoWalletAttributesResponse {
  /** The details about a saved payment source. */
  vault?: SavedPaymentSourceResponse;
}

export const venmoWalletAttributesResponseSchema: Schema<VenmoWalletAttributesResponse> = object(
  { vault: ['vault', optional(lazy(() => savedPaymentSourceResponseSchema))] }
);
