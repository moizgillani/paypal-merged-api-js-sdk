/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthorizationAlreadyCapturedIssueEnum
 */
export enum AuthorizationAlreadyCapturedIssueEnum {
  AUTHORIZATIONALREADYCAPTURED = 'AUTHORIZATION_ALREADY_CAPTURED',
}

/**
 * Schema for AuthorizationAlreadyCapturedIssueEnum
 */
export const authorizationAlreadyCapturedIssueEnumSchema: Schema<AuthorizationAlreadyCapturedIssueEnum> = stringEnum(AuthorizationAlreadyCapturedIssueEnum);
