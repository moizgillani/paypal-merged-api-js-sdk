/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { ExperienceContext, experienceContextSchema } from './experienceContext';

/** Information needed to pay using Trustly. */
export interface TrustlyPaymentInformation {
  /** The name of the account holder associated with this payment method. */
  name: string;
  /** The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank. */
  countryCode: string;
  /** Customizes the payer experience during the approval process for the payment. */
  experienceContext?: ExperienceContext;
}

export const trustlyPaymentInformationSchema: Schema<TrustlyPaymentInformation> = object(
  {
    name: ['name', string()],
    countryCode: ['country_code', string()],
    experienceContext: [
      'experience_context',
      optional(lazy(() => experienceContextSchema)),
    ],
  }
);
