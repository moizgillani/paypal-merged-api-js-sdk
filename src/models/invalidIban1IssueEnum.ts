/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidIban1IssueEnum
 */
export enum InvalidIban1IssueEnum {
  INVALIDIBAN = 'INVALID_IBAN',
}

/**
 * Schema for InvalidIban1IssueEnum
 */
export const invalidIban1IssueEnumSchema: Schema<InvalidIban1IssueEnum> = stringEnum(InvalidIban1IssueEnum);
