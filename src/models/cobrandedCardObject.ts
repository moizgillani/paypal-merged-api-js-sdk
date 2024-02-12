/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { MerchantBase, merchantBaseSchema } from './merchantBase';
import { Money, moneySchema } from './money';

/** Details about the merchant cobranded card used for order purchase. */
export interface CobrandedCardObject {
  /** Array of labels for the cobranded card. */
  labels?: string[];
  /** Merchant associated with the purchase. */
  payee?: MerchantBase;
  /** Amount that was charged to the cobranded card. */
  amount?: Money;
}

export const cobrandedCardObjectSchema: Schema<CobrandedCardObject> = object({
  labels: ['labels', optional(array(string()))],
  payee: ['payee', optional(lazy(() => merchantBaseSchema))],
  amount: ['amount', optional(lazy(() => moneySchema))],
});