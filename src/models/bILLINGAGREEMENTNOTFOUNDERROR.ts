/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  BillingAgreementNotFound1DescriptionEnum,
  billingAgreementNotFound1DescriptionEnumSchema,
} from './billingAgreementNotFound1DescriptionEnum';
import {
  BillingAgreementNotFound1IssueEnum,
  billingAgreementNotFound1IssueEnumSchema,
} from './billingAgreementNotFound1IssueEnum';

export interface BILLINGAGREEMENTNOTFOUNDERROR {
  issue?: BillingAgreementNotFound1IssueEnum;
  description?: BillingAgreementNotFound1DescriptionEnum;
}

export const bILLINGAGREEMENTNOTFOUNDERRORSchema: Schema<BILLINGAGREEMENTNOTFOUNDERROR> = object(
  {
    issue: ['issue', optional(billingAgreementNotFound1IssueEnumSchema)],
    description: [
      'description',
      optional(billingAgreementNotFound1DescriptionEnumSchema),
    ],
  }
);
