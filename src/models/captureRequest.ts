/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';
import {
  PaymentInstruction,
  paymentInstructionSchema,
} from './paymentInstruction';

/** Captures either a portion or the full authorized amount of an authorized payment. */
export interface CaptureRequest {
  /** The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. */
  invoiceId?: string;
  /** An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives. */
  noteToPayer?: string;
  /** The amount to capture. To capture a portion of the full authorized amount, specify an amount. If amount is not specified, the full authorized amount is captured. The amount must be a positive number and in the same currency as the authorization against which the payment is being captured. */
  amount?: Money;
  /** Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization. */
  finalCapture?: boolean;
  /** Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order. */
  paymentInstruction?: PaymentInstruction;
  /** The payment descriptor on the payer's account statement. */
  softDescriptor?: string;
}

export const captureRequestSchema: Schema<CaptureRequest> = object({
  invoiceId: ['invoice_id', optional(string())],
  noteToPayer: ['note_to_payer', optional(string())],
  amount: ['amount', optional(lazy(() => moneySchema))],
  finalCapture: ['final_capture', optional(boolean())],
  paymentInstruction: [
    'payment_instruction',
    optional(lazy(() => paymentInstructionSchema)),
  ],
  softDescriptor: ['soft_descriptor', optional(string())],
});