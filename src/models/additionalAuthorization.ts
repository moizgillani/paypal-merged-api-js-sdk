/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  AuhorizationStatusDetailsPayments,
  auhorizationStatusDetailsPaymentsSchema,
} from './auhorizationStatusDetailsPayments';
import {
  AuthorizedPaymentStatusEnum,
  authorizedPaymentStatusEnumSchema,
} from './authorizedPaymentStatusEnum';
import {
  LinkDescriptionPayments,
  linkDescriptionPaymentsSchema,
} from './linkDescriptionPayments';
import { MerchantBase, merchantBaseSchema } from './merchantBase';
import { Money, moneySchema } from './money';
import {
  NetworkTransactionReferencePayments,
  networkTransactionReferencePaymentsSchema,
} from './networkTransactionReferencePayments';
import {
  SellerProtectionPayments,
  sellerProtectionPaymentsSchema,
} from './sellerProtectionPayments';
import {
  SupplementaryDataPayments,
  supplementaryDataPaymentsSchema,
} from './supplementaryDataPayments';

/** The authorized payment transaction. */
export interface AdditionalAuthorization {
  /** The status for the authorized payment. */
  status?: AuthorizedPaymentStatusEnum;
  /** The details of the authorized order pending status. */
  statusDetails?: AuhorizationStatusDetailsPayments;
  /** The PayPal-generated ID for the authorized payment. */
  id?: string;
  /** The amount for this authorized payment. */
  amount?: Money;
  /** The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. */
  invoiceId?: string;
  /** The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. */
  customId?: string;
  /** Reference values used by the card network to identify a transaction. */
  networkTransactionReference?: NetworkTransactionReferencePayments;
  sellerProtection?: SellerProtectionPayments;
  /** The date and time when the authorized payment expires, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  expirationTime?: string;
  /** An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). */
  links?: LinkDescriptionPayments[];
  /** The date and time when the transaction occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  createTime?: string;
  /** The date and time when the transaction was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  updateTime?: string;
  /** An object that provides supplementary/additional data related to a payment transaction. */
  supplementaryData?: SupplementaryDataPayments;
  /** The details associated with the merchant for this transaction. */
  payee?: MerchantBase;
}

export const additionalAuthorizationSchema: Schema<AdditionalAuthorization> = object(
  {
    status: ['status', optional(authorizedPaymentStatusEnumSchema)],
    statusDetails: [
      'status_details',
      optional(lazy(() => auhorizationStatusDetailsPaymentsSchema)),
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
    expirationTime: ['expiration_time', optional(string())],
    links: [
      'links',
      optional(array(lazy(() => linkDescriptionPaymentsSchema))),
    ],
    createTime: ['create_time', optional(string())],
    updateTime: ['update_time', optional(string())],
    supplementaryData: [
      'supplementary_data',
      optional(lazy(() => supplementaryDataPaymentsSchema)),
    ],
    payee: ['payee', optional(lazy(() => merchantBaseSchema))],
  }
);
