/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VaultInstructionRequired1IssueEnum
 */
export enum VaultInstructionRequired1IssueEnum {
  VAULTINSTRUCTIONREQUIRED = 'VAULT_INSTRUCTION_REQUIRED',
}

/**
 * Schema for VaultInstructionRequired1IssueEnum
 */
export const vaultInstructionRequired1IssueEnumSchema: Schema<VaultInstructionRequired1IssueEnum> = stringEnum(VaultInstructionRequired1IssueEnum);