/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PermissionDenied3Description1Enum
 */
export enum PermissionDenied3Description1Enum {
  EnumYouDoNotHavePermissionToAccessOrPerformOperationsOnThisResource = 'You do not have permission to access or perform operations on this resource.',
}

/**
 * Schema for PermissionDenied3Description1Enum
 */
export const permissionDenied3Description1EnumSchema: Schema<PermissionDenied3Description1Enum> = stringEnum(PermissionDenied3Description1Enum);
