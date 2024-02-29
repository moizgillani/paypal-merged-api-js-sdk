/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ContactTypeEnum
 */
export enum ContactTypeEnum {
  FAX = 'FAX',
  HOME = 'HOME',
  MOBILE = 'MOBILE',
  OTHER = 'OTHER',
  PAGER = 'PAGER',
  WORK = 'WORK',
}

/**
 * Schema for ContactTypeEnum
 */
export const contactTypeEnumSchema: Schema<ContactTypeEnum> = stringEnum(ContactTypeEnum);
