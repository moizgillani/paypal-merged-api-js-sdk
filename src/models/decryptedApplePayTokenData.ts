/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  ApplePayPaymentTypeEnum,
  applePayPaymentTypeEnumSchema,
} from './applePayPaymentTypeEnum';
import { Card, cardSchema } from './card';
import {
  DecryptedApplePayPaymentDetailsData,
  decryptedApplePayPaymentDetailsDataSchema,
} from './decryptedApplePayPaymentDetailsData';
import { Money, moneySchema } from './money';

/** Information about the Payment data obtained by decrypting Apple Pay token. */
export interface DecryptedApplePayTokenData {
  /** The transaction amount for the payment that the payer has approved on apple platform. */
  transactionAmount?: Money;
  /** Apple Pay tokenized credit card used to pay. */
  tokenizedCard: Card;
  /** Apple Pay Hex-encoded device manufacturer identifier. The pattern is defined by an external party and supports Unicode. */
  deviceManufacturerId?: string;
  /** Indicates the type of payment data passed, in case of Non China the payment data is 3DSECURE and for China it is EMV. */
  paymentDataType?: ApplePayPaymentTypeEnum;
  /** Apple Pay payment data object which contains the cryptogram, eci_indicator and other data. */
  paymentData?: DecryptedApplePayPaymentDetailsData;
}

export const decryptedApplePayTokenDataSchema: Schema<DecryptedApplePayTokenData> = object(
  {
    transactionAmount: [
      'transaction_amount',
      optional(lazy(() => moneySchema)),
    ],
    tokenizedCard: ['tokenized_card', lazy(() => cardSchema)],
    deviceManufacturerId: ['device_manufacturer_id', optional(string())],
    paymentDataType: [
      'payment_data_type',
      optional(applePayPaymentTypeEnumSchema),
    ],
    paymentData: [
      'payment_data',
      optional(lazy(() => decryptedApplePayPaymentDetailsDataSchema)),
    ],
  }
);