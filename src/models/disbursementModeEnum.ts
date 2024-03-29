/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DisbursementModeEnum
 */
export enum DisbursementModeEnum {
  INSTANT = 'INSTANT',
  DELAYED = 'DELAYED',
}

/**
 * Schema for DisbursementModeEnum
 */
export const disbursementModeEnumSchema: Schema<DisbursementModeEnum> = stringEnum(DisbursementModeEnum);
