/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CaptureStatusNotValidDescription2Enum
 */
export enum CaptureStatusNotValidDescription2Enum {
  EnumInvalidCaptureStatusTrackerInformationCanOnlyBeAddedToCapturesInCOMPLETEDState = 'Invalid capture status. Tracker information can only be added to captures in `COMPLETED` state.',
}

/**
 * Schema for CaptureStatusNotValidDescription2Enum
 */
export const captureStatusNotValidDescription2EnumSchema: Schema<CaptureStatusNotValidDescription2Enum> = stringEnum(CaptureStatusNotValidDescription2Enum);