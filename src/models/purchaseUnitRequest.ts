/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  AmountWithBreakdown,
  amountWithBreakdownSchema,
} from './amountWithBreakdown';
import { Item, itemSchema } from './item';
import { Merchant, merchantSchema } from './merchant';
import {
  PaymentInstruction,
  paymentInstructionSchema,
} from './paymentInstruction';
import { ShippingDetails, shippingDetailsSchema } from './shippingDetails';
import { SupplementaryData, supplementaryDataSchema } from './supplementaryData';

/** The purchase unit request. Includes required information for the payment contract. */
export interface PurchaseUnitRequest {
  /** The API caller-provided external ID for the purchase unit. Required for multiple purchase units when you must update the order through `PATCH`. If you omit this value and the order contains only one purchase unit, PayPal sets this value to `default`. */
  referenceId?: string;
  /** The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.<br/>If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount.<br/>The amount must be a positive number. The `amount.value` field supports up to 15 digits preceding the decimal. For a list of supported currencies, decimal precision, and maximum charge amount, see the PayPal REST APIs <a href="https://developer.paypal.com/api/rest/reference/currency-codes/">Currency Codes</a>. */
  amount: AmountWithBreakdown;
  /** The merchant who receives payment for this transaction. */
  payee?: Merchant;
  /** Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order. */
  paymentInstruction?: PaymentInstruction;
  /** The purchase description. The maximum length of the character is dependent on the type of characters used. The character length is specified assuming a US ASCII character. Depending on type of character; (e.g. accented character, Japanese characters) the number of characters that that can be specified as input might not equal the permissible max length. */
  description?: string;
  /** The API caller-provided external ID. Used to reconcile client transactions with PayPal transactions. Appears in transaction and settlement reports but is not visible to the payer. */
  customId?: string;
  /** The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. */
  invoiceId?: string;
  /** The soft descriptor is the dynamic text used to construct the statement descriptor that appears on a payer's card statement.<br><br>If an Order is paid using the "PayPal Wallet", the statement descriptor will appear in following format on the payer's card statement: <code><var>PAYPAL_prefix</var>+(space)+<var>merchant_descriptor</var>+(space)+ <var>soft_descriptor</var></code><blockquote><strong>Note:</strong> The merchant descriptor is the descriptor of the merchant’s payment receiving preferences which can be seen by logging into the merchant account https://www.sandbox.paypal.com/businessprofile/settings/info/edit</blockquote>The <code>PAYPAL</code> prefix uses 8 characters. Only the first 22 characters will be displayed in the statement. <br>For example, if: The PayPal prefix toggle is PAYPAL*. The merchant descriptor in the profile is Janes Gift. The soft descriptor is 800-123-1234. Then, the statement descriptor on the card is PAYPAL * Janes Gift 80. */
  softDescriptor?: string;
  /** An array of items that the customer purchases from the merchant. */
  items?: Item[];
  /** The name and address of the person to whom to ship the items. */
  shipping?: ShippingDetails;
  /** Supplementary data about this payment. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>. */
  supplementaryData?: SupplementaryData;
}

export const purchaseUnitRequestSchema: Schema<PurchaseUnitRequest> = object({
  referenceId: ['reference_id', optional(string())],
  amount: ['amount', lazy(() => amountWithBreakdownSchema)],
  payee: ['payee', optional(lazy(() => merchantSchema))],
  paymentInstruction: [
    'payment_instruction',
    optional(lazy(() => paymentInstructionSchema)),
  ],
  description: ['description', optional(string())],
  customId: ['custom_id', optional(string())],
  invoiceId: ['invoice_id', optional(string())],
  softDescriptor: ['soft_descriptor', optional(string())],
  items: ['items', optional(array(lazy(() => itemSchema)))],
  shipping: ['shipping', optional(lazy(() => shippingDetailsSchema))],
  supplementaryData: [
    'supplementary_data',
    optional(lazy(() => supplementaryDataSchema)),
  ],
});
