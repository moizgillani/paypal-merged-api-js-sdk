/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VaultInstructionDuplicated1DescriptionEnum
 */
export enum VaultInstructionDuplicated1DescriptionEnum {
  EnumOnlyOneVaultInstructionIsAllowedPleaseUseVaultstoreInVaultToProvideVaultInstruction = 'Only one vault instruction is allowed. Please use `vault.store_in_vault` to provide vault instruction.',
}

/**
 * Schema for VaultInstructionDuplicated1DescriptionEnum
 */
export const vaultInstructionDuplicated1DescriptionEnumSchema: Schema<VaultInstructionDuplicated1DescriptionEnum> = stringEnum(VaultInstructionDuplicated1DescriptionEnum);
