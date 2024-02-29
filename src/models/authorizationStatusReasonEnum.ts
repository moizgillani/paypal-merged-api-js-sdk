/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthorizationStatusReasonEnum
 */
export enum AuthorizationStatusReasonEnum {
  PENDINGREVIEW = 'PENDING_REVIEW',
}

/**
 * Schema for AuthorizationStatusReasonEnum
 */
export const authorizationStatusReasonEnumSchema: Schema<AuthorizationStatusReasonEnum> = stringEnum(AuthorizationStatusReasonEnum);
