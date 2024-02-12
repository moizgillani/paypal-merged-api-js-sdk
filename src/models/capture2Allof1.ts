/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  SupplementaryDataPayments,
  supplementaryDataPaymentsSchema,
} from './supplementaryDataPayments';

export interface Capture2Allof1 {
  /** An object that provides supplementary/additional data related to a payment transaction. */
  supplementaryData?: SupplementaryDataPayments;
  /** The details associated with the merchant for this transaction. */
  payee?: SupplementaryDataPayments;
}

export const capture2Allof1Schema: Schema<Capture2Allof1> = object({
  supplementaryData: [
    'supplementary_data',
    optional(lazy(() => supplementaryDataPaymentsSchema)),
  ],
  payee: ['payee', optional(lazy(() => supplementaryDataPaymentsSchema))],
});
