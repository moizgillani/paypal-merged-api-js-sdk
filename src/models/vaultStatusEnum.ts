/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VaultStatusEnum
 */
export enum VaultStatusEnum {
  VAULTED = 'VAULTED',
  CREATED = 'CREATED',
  APPROVED = 'APPROVED',
}

/**
 * Schema for VaultStatusEnum
 */
export const vaultStatusEnumSchema: Schema<VaultStatusEnum> = stringEnum(VaultStatusEnum);