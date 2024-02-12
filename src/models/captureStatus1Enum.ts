/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CaptureStatus1Enum
 */
export enum CaptureStatus1Enum {
  COMPLETED = 'COMPLETED',
  DECLINED = 'DECLINED',
  PARTIALLYREFUNDED = 'PARTIALLY_REFUNDED',
  PENDING = 'PENDING',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED',
}

/**
 * Schema for CaptureStatus1Enum
 */
export const captureStatus1EnumSchema: Schema<CaptureStatus1Enum> = stringEnum(CaptureStatus1Enum);