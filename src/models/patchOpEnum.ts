/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PatchOpEnum
 */
export enum PatchOpEnum {
  Add = 'add',
  Remove = 'remove',
  Replace = 'replace',
  Move = 'move',
  Copy = 'copy',
  Test = 'test',
}

/**
 * Schema for PatchOpEnum
 */
export const patchOpEnumSchema: Schema<PatchOpEnum> = stringEnum(PatchOpEnum);
