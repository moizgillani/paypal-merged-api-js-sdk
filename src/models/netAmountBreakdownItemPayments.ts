/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ExchangeRate, exchangeRateSchema } from './exchangeRate';
import { Money, moneySchema } from './money';
import {
  RefundStatusDetailsPayments,
  refundStatusDetailsPaymentsSchema,
} from './refundStatusDetailsPayments';

/** The net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the merchant holds their funds. */
export interface NetAmountBreakdownItemPayments {
  /** The net amount debited from the merchant's PayPal account. */
  payableAmount?: RefundStatusDetailsPayments;
  /** The converted payable amount. */
  convertedAmount?: Money;
  /** The exchange rate that determines the amount that was debited from the merchant's PayPal account. */
  exchangeRate?: ExchangeRate;
}

export const netAmountBreakdownItemPaymentsSchema: Schema<NetAmountBreakdownItemPayments> = object(
  {
    payableAmount: [
      'payable_amount',
      optional(lazy(() => refundStatusDetailsPaymentsSchema)),
    ],
    convertedAmount: ['converted_amount', optional(lazy(() => moneySchema))],
    exchangeRate: ['exchange_rate', optional(lazy(() => exchangeRateSchema))],
  }
);
