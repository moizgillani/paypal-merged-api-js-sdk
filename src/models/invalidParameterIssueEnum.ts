/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidParameterIssueEnum
 */
export enum InvalidParameterIssueEnum {
  INVALIDPARAMETER = 'INVALID_PARAMETER',
}

/**
 * Schema for InvalidParameterIssueEnum
 */
export const invalidParameterIssueEnumSchema: Schema<InvalidParameterIssueEnum> = stringEnum(InvalidParameterIssueEnum);
