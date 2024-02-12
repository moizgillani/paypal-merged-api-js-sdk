/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  LandingPageTypeEnum,
  landingPageTypeEnumSchema,
} from './landingPageTypeEnum';
import {
  MerchantPreferredPaymentMethodsEnum,
  merchantPreferredPaymentMethodsEnumSchema,
} from './merchantPreferredPaymentMethodsEnum';
import {
  ShippingPreferenceEnum,
  shippingPreferenceEnumSchema,
} from './shippingPreferenceEnum';
import { UserActionEnum, userActionEnumSchema } from './userActionEnum';

/** Customizes the payer experience during the approval process for payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote> */
export interface PayPalWalletExperienceContext {
  /** The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode. */
  brandName?: string;
  /** The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`. */
  locale?: string;
  /** The location from which the shipping address is derived. */
  shippingPreference?: ShippingPreferenceEnum;
  /** The URL where the customer will be redirected upon approving a payment. */
  returnUrl?: string;
  /** The URL where the customer will be redirected upon cancelling the payment approval. */
  cancelUrl?: string;
  /** The type of landing page to show on the PayPal site for customer checkout. */
  landingPage?: LandingPageTypeEnum;
  /** Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow. */
  userAction?: UserActionEnum;
  /** The merchant-preferred payment methods. */
  paymentMethodPreference?: MerchantPreferredPaymentMethodsEnum;
}

export const payPalWalletExperienceContextSchema: Schema<PayPalWalletExperienceContext> = object(
  {
    brandName: ['brand_name', optional(string())],
    locale: ['locale', optional(string())],
    shippingPreference: [
      'shipping_preference',
      optional(shippingPreferenceEnumSchema),
    ],
    returnUrl: ['return_url', optional(string())],
    cancelUrl: ['cancel_url', optional(string())],
    landingPage: ['landing_page', optional(landingPageTypeEnumSchema)],
    userAction: ['user_action', optional(userActionEnumSchema)],
    paymentMethodPreference: [
      'payment_method_preference',
      optional(merchantPreferredPaymentMethodsEnumSchema),
    ],
  }
);
