/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AuthorizationStatusReasonEnum,
  authorizationStatusReasonEnumSchema,
} from './authorizationStatusReasonEnum';

/** The details of the authorized payment status. */
export interface AuhorizationStatusDetailsPayments {
  /** The reason why the authorized status is `PENDING`. */
  reason?: AuthorizationStatusReasonEnum;
}

export const auhorizationStatusDetailsPaymentsSchema: Schema<AuhorizationStatusDetailsPayments> = object(
  { reason: ['reason', optional(authorizationStatusReasonEnumSchema)] }
);