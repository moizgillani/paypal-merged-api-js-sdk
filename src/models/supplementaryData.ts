/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  CardSupplementaryData,
  cardSupplementaryDataSchema,
} from './cardSupplementaryData';

/** Supplementary data about a payment. This object passes information that can be used to improve risk assessments and processing costs, for example, by providing Level 2 and Level 3 payment data. */
export interface SupplementaryData {
  /** Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>. */
  card?: CardSupplementaryData;
}

export const supplementaryDataSchema: Schema<SupplementaryData> = object({
  card: ['card', optional(lazy(() => cardSupplementaryDataSchema))],
});
