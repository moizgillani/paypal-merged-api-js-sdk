/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ConsentNeededIssueEnum
 */
export enum ConsentNeededIssueEnum {
  CONSENTNEEDED = 'CONSENT_NEEDED',
}

/**
 * Schema for ConsentNeededIssueEnum
 */
export const consentNeededIssueEnumSchema: Schema<ConsentNeededIssueEnum> = stringEnum(ConsentNeededIssueEnum);
