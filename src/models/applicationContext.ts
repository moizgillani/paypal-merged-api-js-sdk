/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  ApplicationContextLandingPageEnum,
  applicationContextLandingPageEnumSchema,
} from './applicationContextLandingPageEnum';
import {
  ApplicationContextShippingPreferenceEnum,
  applicationContextShippingPreferenceEnumSchema,
} from './applicationContextShippingPreferenceEnum';
import {
  ApplicationContextUserActionEnum,
  applicationContextUserActionEnumSchema,
} from './applicationContextUserActionEnum';
import { PaymentMethod, paymentMethodSchema } from './paymentMethod';
import {
  StoredPaymentSource,
  storedPaymentSourceSchema,
} from './storedPaymentSource';

/** Customizes the payer experience during the approval process for the payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote> */
export interface ApplicationContext {
  /** DEPRECATED. The label that overrides the business name in the PayPal account on the PayPal site. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.brand_name`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  brandName?: string;
  /** The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`. */
  locale?: string;
  /** DEPRECATED. DEPRECATED. The type of landing page to show on the PayPal site for customer checkout.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.landing_page`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  landingPage?: ApplicationContextLandingPageEnum;
  /** DEPRECATED. DEPRECATED. The shipping preference: Displays the shipping address to the customer. Enables the customer to choose an address on the PayPal site. Restricts the customer from changing the address during the payment-approval process.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.shipping_preference`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  shippingPreference?: ApplicationContextShippingPreferenceEnum;
  /** DEPRECATED. Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.user_action`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  userAction?: ApplicationContextUserActionEnum;
  /** DEPRECATED. The customer and merchant payment preferences. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.payment_method_selected`). Please specify this field in the `experience_context` object instead of the `application_context` object.. */
  paymentMethod?: PaymentMethod;
  /** DEPRECATED. The URL where the customer is redirected after the customer approves the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.return_url`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  returnUrl?: string;
  /** DEPRECATED. The URL where the customer is redirected after the customer cancels the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.cancel_url`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  cancelUrl?: string;
  /** DEPRECATED. Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`. `usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`. `previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`. Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.  The fields in `stored_payment_source` are now available in the `stored_credential` object under the `payment_source` which supports them (eg. `payment_source.card.stored_credential.payment_initiator`). Please specify this field in the `payment_source` object instead of the `application_context` object. */
  storedPaymentSource?: StoredPaymentSource;
}

export const applicationContextSchema: Schema<ApplicationContext> = object({
  brandName: ['brand_name', optional(string())],
  locale: ['locale', optional(string())],
  landingPage: [
    'landing_page',
    optional(applicationContextLandingPageEnumSchema),
  ],
  shippingPreference: [
    'shipping_preference',
    optional(applicationContextShippingPreferenceEnumSchema),
  ],
  userAction: ['user_action', optional(applicationContextUserActionEnumSchema)],
  paymentMethod: ['payment_method', optional(lazy(() => paymentMethodSchema))],
  returnUrl: ['return_url', optional(string())],
  cancelUrl: ['cancel_url', optional(string())],
  storedPaymentSource: [
    'stored_payment_source',
    optional(lazy(() => storedPaymentSourceSchema)),
  ],
});