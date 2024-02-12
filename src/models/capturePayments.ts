/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CaptureStatus1Enum,
  captureStatus1EnumSchema,
} from './captureStatus1Enum';
import {
  CaptureStatusDetailsPayments,
  captureStatusDetailsPaymentsSchema,
} from './captureStatusDetailsPayments';
import {
  DisbursementModeEnum,
  disbursementModeEnumSchema,
} from './disbursementModeEnum';
import {
  LinkDescriptionPayments,
  linkDescriptionPaymentsSchema,
} from './linkDescriptionPayments';
import { Money, moneySchema } from './money';
import {
  NetworkTransactionReferencePayments,
  networkTransactionReferencePaymentsSchema,
} from './networkTransactionReferencePayments';
import {
  ProcessorResponsePayments,
  processorResponsePaymentsSchema,
} from './processorResponsePayments';
import {
  SellerProtectionPayments,
  sellerProtectionPaymentsSchema,
} from './sellerProtectionPayments';
import {
  SellerReceivableBreakdown,
  sellerReceivableBreakdownSchema,
} from './sellerReceivableBreakdown';

/** A captured payment. */
export interface CapturePayments {
  /** The status of the captured payment. */
  status?: CaptureStatus1Enum;
  /** The details of the captured payment status. */
  statusDetails?: CaptureStatusDetailsPayments;
  /** The PayPal-generated ID for the captured payment. */
  id?: string;
  /** The amount for this captured payment. */
  amount?: Money;
  /** The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. */
  invoiceId?: string;
  /** The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. */
  customId?: string;
  /** Reference values used by the card network to identify a transaction. */
  networkTransactionReference?: NetworkTransactionReferencePayments;
  sellerProtection?: SellerProtectionPayments;
  /** Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization. */
  finalCapture?: boolean;
  sellerReceivableBreakdown?: SellerReceivableBreakdown;
  /** The funds that are held on behalf of the merchant. */
  disbursementMode?: DisbursementModeEnum;
  /** An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). */
  links?: LinkDescriptionPayments[];
  /** An object that provides additional processor information for a direct credit card transaction. */
  processorResponse?: ProcessorResponsePayments;
  /** The date and time when the transaction occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  createTime?: string;
  /** The date and time when the transaction was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  updateTime?: string;
}

export const capturePaymentsSchema: Schema<CapturePayments> = object({
  status: ['status', optional(captureStatus1EnumSchema)],
  statusDetails: [
    'status_details',
    optional(lazy(() => captureStatusDetailsPaymentsSchema)),
  ],
  id: ['id', optional(string())],
  amount: ['amount', optional(lazy(() => moneySchema))],
  invoiceId: ['invoice_id', optional(string())],
  customId: ['custom_id', optional(string())],
  networkTransactionReference: [
    'network_transaction_reference',
    optional(lazy(() => networkTransactionReferencePaymentsSchema)),
  ],
  sellerProtection: [
    'seller_protection',
    optional(lazy(() => sellerProtectionPaymentsSchema)),
  ],
  finalCapture: ['final_capture', optional(boolean())],
  sellerReceivableBreakdown: [
    'seller_receivable_breakdown',
    optional(lazy(() => sellerReceivableBreakdownSchema)),
  ],
  disbursementMode: ['disbursement_mode', optional(disbursementModeEnumSchema)],
  links: ['links', optional(array(lazy(() => linkDescriptionPaymentsSchema)))],
  processorResponse: [
    'processor_response',
    optional(lazy(() => processorResponsePaymentsSchema)),
  ],
  createTime: ['create_time', optional(string())],
  updateTime: ['update_time', optional(string())],
});
