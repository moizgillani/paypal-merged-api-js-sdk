/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DecimalPrecisionIssueEnum
 */
export enum DecimalPrecisionIssueEnum {
  DECIMALPRECISION = 'DECIMAL_PRECISION',
}

/**
 * Schema for DecimalPrecisionIssueEnum
 */
export const decimalPrecisionIssueEnumSchema: Schema<DecimalPrecisionIssueEnum> = stringEnum(DecimalPrecisionIssueEnum);