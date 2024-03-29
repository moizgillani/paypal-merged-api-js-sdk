/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MaxAuthorizationCountExceededIssueEnum
 */
export enum MaxAuthorizationCountExceededIssueEnum {
  MAXAUTHORIZATIONCOUNTEXCEEDED = 'MAX_AUTHORIZATION_COUNT_EXCEEDED',
}

/**
 * Schema for MaxAuthorizationCountExceededIssueEnum
 */
export const maxAuthorizationCountExceededIssueEnumSchema: Schema<MaxAuthorizationCountExceededIssueEnum> = stringEnum(MaxAuthorizationCountExceededIssueEnum);
