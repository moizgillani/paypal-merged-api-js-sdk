/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { MerchantBase, merchantBaseSchema } from './merchantBase';
import {
  SupplementaryDataPayments,
  supplementaryDataPaymentsSchema,
} from './supplementaryDataPayments';

export interface Authorization2Allof1 {
  /** An object that provides supplementary/additional data related to a payment transaction. */
  supplementaryData?: SupplementaryDataPayments;
  /** The details associated with the merchant for this transaction. */
  payee?: MerchantBase;
}

export const authorization2Allof1Schema: Schema<Authorization2Allof1> = object({
  supplementaryData: [
    'supplementary_data',
    optional(lazy(() => supplementaryDataPaymentsSchema)),
  ],
  payee: ['payee', optional(lazy(() => merchantBaseSchema))],
});
