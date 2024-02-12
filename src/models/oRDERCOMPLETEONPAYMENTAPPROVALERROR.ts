/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  OrderCompleteOnPaymentApproval1DescriptionEnum,
  orderCompleteOnPaymentApproval1DescriptionEnumSchema,
} from './orderCompleteOnPaymentApproval1DescriptionEnum';
import {
  OrderCompleteOnPaymentApproval1IssueEnum,
  orderCompleteOnPaymentApproval1IssueEnumSchema,
} from './orderCompleteOnPaymentApproval1IssueEnum';

export interface ORDERCOMPLETEONPAYMENTAPPROVALERROR {
  issue?: OrderCompleteOnPaymentApproval1IssueEnum;
  description?: OrderCompleteOnPaymentApproval1DescriptionEnum;
}

export const oRDERCOMPLETEONPAYMENTAPPROVALERRORSchema: Schema<ORDERCOMPLETEONPAYMENTAPPROVALERROR> = object(
  {
    issue: ['issue', optional(orderCompleteOnPaymentApproval1IssueEnumSchema)],
    description: [
      'description',
      optional(orderCompleteOnPaymentApproval1DescriptionEnumSchema),
    ],
  }
);