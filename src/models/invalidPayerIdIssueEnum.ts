/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidPayerIdIssueEnum
 */
export enum InvalidPayerIdIssueEnum {
  INVALIDPAYERID = 'INVALID_PAYER_ID',
}

/**
 * Schema for InvalidPayerIdIssueEnum
 */
export const invalidPayerIdIssueEnumSchema: Schema<InvalidPayerIdIssueEnum> = stringEnum(InvalidPayerIdIssueEnum);
