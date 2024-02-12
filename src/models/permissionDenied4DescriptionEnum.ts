/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PermissionDenied4DescriptionEnum
 */
export enum PermissionDenied4DescriptionEnum {
  EnumYouDoNotHavePermissionToAccessOrPerformOperationsOnThisResource = 'You do not have permission to access or perform operations on this resource.',
}

/**
 * Schema for PermissionDenied4DescriptionEnum
 */
export const permissionDenied4DescriptionEnumSchema: Schema<PermissionDenied4DescriptionEnum> = stringEnum(PermissionDenied4DescriptionEnum);
