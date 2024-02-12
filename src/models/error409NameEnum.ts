/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Error409NameEnum
 */
export enum Error409NameEnum {
  RESOURCECONFLICT = 'RESOURCE_CONFLICT',
}

/**
 * Schema for Error409NameEnum
 */
export const error409NameEnumSchema: Schema<Error409NameEnum> = stringEnum(Error409NameEnum);
