/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CaptureStatusReasonEnum
 */
export enum CaptureStatusReasonEnum {
  BUYERCOMPLAINT = 'BUYER_COMPLAINT',
  CHARGEBACK = 'CHARGEBACK',
  ECHECK = 'ECHECK',
  INTERNATIONALWITHDRAWAL = 'INTERNATIONAL_WITHDRAWAL',
  OTHER = 'OTHER',
  PENDINGREVIEW = 'PENDING_REVIEW',
  RECEIVINGPREFERENCEMANDATESMANUALACTION = 'RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION',
  REFUNDED = 'REFUNDED',
  TRANSACTIONAPPROVEDAWAITINGFUNDING = 'TRANSACTION_APPROVED_AWAITING_FUNDING',
  UNILATERAL = 'UNILATERAL',
  VERIFICATIONREQUIRED = 'VERIFICATION_REQUIRED',
}

/**
 * Schema for CaptureStatusReasonEnum
 */
export const captureStatusReasonEnumSchema: Schema<CaptureStatusReasonEnum> = stringEnum(CaptureStatusReasonEnum);
