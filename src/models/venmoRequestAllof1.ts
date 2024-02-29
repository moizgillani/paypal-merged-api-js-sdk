/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ExperienceContextPaymentMethodTokens,
  experienceContextPaymentMethodTokensSchema,
} from './experienceContextPaymentMethodTokens';

export interface VenmoRequestAllof1 {
  /** Customizes the Vault creation flow experience for your customers. */
  experienceContext?: ExperienceContextPaymentMethodTokens;
}

export const venmoRequestAllof1Schema: Schema<VenmoRequestAllof1> = object({
  experienceContext: [
    'experience_context',
    optional(lazy(() => experienceContextPaymentMethodTokensSchema)),
  ],
});
