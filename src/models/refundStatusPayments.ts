/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { RefundStatus1Enum, refundStatus1EnumSchema } from './refundStatus1Enum';
import {
  RefundStatusDetailsPayments,
  refundStatusDetailsPaymentsSchema,
} from './refundStatusDetailsPayments';

/** The refund status. */
export interface RefundStatusPayments {
  /** The status of the refund. */
  status?: RefundStatus1Enum;
  /** The details of the refund status. */
  statusDetails?: RefundStatusDetailsPayments;
}

export const refundStatusPaymentsSchema: Schema<RefundStatusPayments> = object({
  status: ['status', optional(refundStatus1EnumSchema)],
  statusDetails: [
    'status_details',
    optional(lazy(() => refundStatusDetailsPaymentsSchema)),
  ],
});
