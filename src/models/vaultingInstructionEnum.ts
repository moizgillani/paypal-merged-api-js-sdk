/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VaultingInstructionEnum
 */
export enum VaultingInstructionEnum {
  ONSUCCESS = 'ON_SUCCESS',
}

/**
 * Schema for VaultingInstructionEnum
 */
export const vaultingInstructionEnumSchema: Schema<VaultingInstructionEnum> = stringEnum(VaultingInstructionEnum);
