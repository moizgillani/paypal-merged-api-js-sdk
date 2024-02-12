/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  ExperienceContextPaymentMethodTokens,
  experienceContextPaymentMethodTokensSchema,
} from './experienceContextPaymentMethodTokens';

export interface CardRequestAllof1 {
  /** The API caller can opt in to verify the payment token through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS). */
  verificationMethod?: string;
  /** Customizes the Vault creation flow experience for your customers. */
  experienceContext?: ExperienceContextPaymentMethodTokens;
}

export const cardRequestAllof1Schema: Schema<CardRequestAllof1> = object({
  verificationMethod: ['verification_method', optional(string())],
  experienceContext: [
    'experience_context',
    optional(lazy(() => experienceContextPaymentMethodTokensSchema)),
  ],
});