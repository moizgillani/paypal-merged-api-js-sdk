/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VaultInstructionDuplicatedDescriptionEnum
 */
export enum VaultInstructionDuplicatedDescriptionEnum {
  EnumOnlyOneVaultInstructionIsAllowedPleaseUseVaultstoreInVaultToProvideVaultInstruction = 'Only one vault instruction is allowed. Please use `vault.store_in_vault` to provide vault instruction.',
}

/**
 * Schema for VaultInstructionDuplicatedDescriptionEnum
 */
export const vaultInstructionDuplicatedDescriptionEnumSchema: Schema<VaultInstructionDuplicatedDescriptionEnum> = stringEnum(VaultInstructionDuplicatedDescriptionEnum);
