/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import { AVSCodeEnum, aVSCodeEnumSchema } from './aVSCodeEnum';
import { CVVCodeEnum, cVVCodeEnumSchema } from './cVVCodeEnum';
import {
  PaymentAdviceCodeEnum,
  paymentAdviceCodeEnumSchema,
} from './paymentAdviceCodeEnum';
import { ResponseCodeEnum, responseCodeEnumSchema } from './responseCodeEnum';

/** The processor response information for payment requests, such as direct credit card transactions. */
export interface ProcessorResponse {
  /** The address verification code for Visa, Discover, Mastercard, or American Express transactions. */
  avsCode?: AVSCodeEnum;
  /** The card verification value code for for Visa, Discover, Mastercard, or American Express. */
  cvvCode?: CVVCodeEnum;
  /** Processor response code for the non-PayPal payment processor errors. */
  responseCode?: ResponseCodeEnum;
  /** The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes. */
  paymentAdviceCode?: PaymentAdviceCodeEnum;
}

export const processorResponseSchema: Schema<ProcessorResponse> = object({
  avsCode: ['avs_code', optional(aVSCodeEnumSchema)],
  cvvCode: ['cvv_code', optional(cVVCodeEnumSchema)],
  responseCode: ['response_code', optional(responseCodeEnumSchema)],
  paymentAdviceCode: [
    'payment_advice_code',
    optional(paymentAdviceCodeEnumSchema),
  ],
});
