/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PayeePricingTierIdNotEnabledDescriptionEnum,
  payeePricingTierIdNotEnabledDescriptionEnumSchema,
} from './payeePricingTierIdNotEnabledDescriptionEnum';
import {
  PayeePricingTierIdNotEnabledIssueEnum,
  payeePricingTierIdNotEnabledIssueEnumSchema,
} from './payeePricingTierIdNotEnabledIssueEnum';

export interface PAYEEPRICINGTIERIDNOTENABLED {
  issue?: PayeePricingTierIdNotEnabledIssueEnum;
  description?: PayeePricingTierIdNotEnabledDescriptionEnum;
}

export const pAYEEPRICINGTIERIDNOTENABLEDSchema: Schema<PAYEEPRICINGTIERIDNOTENABLED> = object(
  {
    issue: ['issue', optional(payeePricingTierIdNotEnabledIssueEnumSchema)],
    description: [
      'description',
      optional(payeePricingTierIdNotEnabledDescriptionEnumSchema),
    ],
  }
);
