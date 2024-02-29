/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PermissionDeniedIssueEnum
 */
export enum PermissionDeniedIssueEnum {
  PERMISSIONDENIED = 'PERMISSION_DENIED',
}

/**
 * Schema for PermissionDeniedIssueEnum
 */
export const permissionDeniedIssueEnumSchema: Schema<PermissionDeniedIssueEnum> = stringEnum(PermissionDeniedIssueEnum);
