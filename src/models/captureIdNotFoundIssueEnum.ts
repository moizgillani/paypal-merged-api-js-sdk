/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CaptureIdNotFoundIssueEnum
 */
export enum CaptureIdNotFoundIssueEnum {
  CAPTUREIDNOTFOUND = 'CAPTURE_ID_NOT_FOUND',
}

/**
 * Schema for CaptureIdNotFoundIssueEnum
 */
export const captureIdNotFoundIssueEnumSchema: Schema<CaptureIdNotFoundIssueEnum> = stringEnum(CaptureIdNotFoundIssueEnum);
