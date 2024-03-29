/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  PayPalSCustomerDataRecords,
  payPalSCustomerDataRecordsSchema,
} from './payPalSCustomerDataRecords';
import {
  VaultedVenmoWalletCommonAttributes,
  vaultedVenmoWalletCommonAttributesSchema,
} from './vaultedVenmoWalletCommonAttributes';

/** Additional attributes associated with the use of this Venmo Wallet. */
export interface VenmoWalletAttributes {
  /** The details about a customer in PayPal's system of record. */
  customer?: PayPalSCustomerDataRecords;
  /** Attributes used to provide the instructions during vaulting of the Venmo Wallet. */
  vault?: VaultedVenmoWalletCommonAttributes;
}

export const venmoWalletAttributesSchema: Schema<VenmoWalletAttributes> = object(
  {
    customer: [
      'customer',
      optional(lazy(() => payPalSCustomerDataRecordsSchema)),
    ],
    vault: [
      'vault',
      optional(lazy(() => vaultedVenmoWalletCommonAttributesSchema)),
    ],
  }
);
