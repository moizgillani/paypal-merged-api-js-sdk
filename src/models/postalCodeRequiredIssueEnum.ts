/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PostalCodeRequiredIssueEnum
 */
export enum PostalCodeRequiredIssueEnum {
  POSTALCODEREQUIRED = 'POSTAL_CODE_REQUIRED',
}

/**
 * Schema for PostalCodeRequiredIssueEnum
 */
export const postalCodeRequiredIssueEnumSchema: Schema<PostalCodeRequiredIssueEnum> = stringEnum(PostalCodeRequiredIssueEnum);
