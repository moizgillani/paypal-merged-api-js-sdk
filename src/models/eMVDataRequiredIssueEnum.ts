/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EMVDataRequiredIssueEnum
 */
export enum EMVDataRequiredIssueEnum {
  EMVDATAREQUIRED = 'EMV_DATA_REQUIRED',
}

/**
 * Schema for EMVDataRequiredIssueEnum
 */
export const eMVDataRequiredIssueEnumSchema: Schema<EMVDataRequiredIssueEnum> = stringEnum(EMVDataRequiredIssueEnum);
