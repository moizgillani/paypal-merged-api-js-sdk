/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CaptureStatusNotValidDescriptionEnum
 */
export enum CaptureStatusNotValidDescriptionEnum {
  EnumInvalidCaptureStatusTrackerInformationCanOnlyBeAddedToCapturesInCOMPLETEDState = 'Invalid capture status. Tracker information can only be added to captures in `COMPLETED` state.',
}

/**
 * Schema for CaptureStatusNotValidDescriptionEnum
 */
export const captureStatusNotValidDescriptionEnumSchema: Schema<CaptureStatusNotValidDescriptionEnum> = stringEnum(CaptureStatusNotValidDescriptionEnum);