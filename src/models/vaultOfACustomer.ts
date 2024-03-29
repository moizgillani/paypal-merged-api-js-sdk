/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { CustomerRequest, customerRequestSchema } from './customerRequest';
import {
  LinkDescriptionPaymentMethodTokens,
  linkDescriptionPaymentMethodTokensSchema,
} from './linkDescriptionPaymentMethodTokens';
import {
  PaymentTokenResponse,
  paymentTokenResponseSchema,
} from './paymentTokenResponse';

/** Collection of payment tokens saved for a given customer. */
export interface VaultOfACustomer {
  /** Total number of items. */
  totalItems?: number;
  /** Total number of pages. */
  totalPages?: number;
  /** Customer in merchant's or partner's system of records. */
  customer?: CustomerRequest;
  paymentTokens?: PaymentTokenResponse[];
  /** An array of related [HATEOAS links](/api/rest/responses/#hateoas). */
  links?: LinkDescriptionPaymentMethodTokens[];
}

export const vaultOfACustomerSchema: Schema<VaultOfACustomer> = object({
  totalItems: ['total_items', optional(number())],
  totalPages: ['total_pages', optional(number())],
  customer: ['customer', optional(lazy(() => customerRequestSchema))],
  paymentTokens: [
    'payment_tokens',
    optional(array(lazy(() => paymentTokenResponseSchema))),
  ],
  links: [
    'links',
    optional(array(lazy(() => linkDescriptionPaymentMethodTokensSchema))),
  ],
});
