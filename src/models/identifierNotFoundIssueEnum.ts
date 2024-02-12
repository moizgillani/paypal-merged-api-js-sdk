/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IdentifierNotFoundIssueEnum
 */
export enum IdentifierNotFoundIssueEnum {
  IDENTIFIERNOTFOUND = 'IDENTIFIER_NOT_FOUND',
}

/**
 * Schema for IdentifierNotFoundIssueEnum
 */
export const identifierNotFoundIssueEnumSchema: Schema<IdentifierNotFoundIssueEnum> = stringEnum(IdentifierNotFoundIssueEnum);