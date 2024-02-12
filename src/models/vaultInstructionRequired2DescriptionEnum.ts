/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VaultInstructionRequired2DescriptionEnum
 */
export enum VaultInstructionRequired2DescriptionEnum {
  EnumVaultInstructionIsRequiredPleaseUseVaultstoreInVaultToProvideVaultInstruction = 'Vault instruction is required. Please use `vault.store_in_vault` to provide vault instruction.',
}

/**
 * Schema for VaultInstructionRequired2DescriptionEnum
 */
export const vaultInstructionRequired2DescriptionEnumSchema: Schema<VaultInstructionRequired2DescriptionEnum> = stringEnum(VaultInstructionRequired2DescriptionEnum);