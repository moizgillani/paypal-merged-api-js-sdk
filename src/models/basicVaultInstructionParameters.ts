/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  VaultingInstructionEnum,
  vaultingInstructionEnumSchema,
} from './vaultingInstructionEnum';

/** Basic vault instruction specification that can be extended by specific payment sources that supports vaulting. */
export interface BasicVaultInstructionParameters {
  /** Defines how and when the payment source gets vaulted. */
  storeInVault?: VaultingInstructionEnum;
}

export const basicVaultInstructionParametersSchema: Schema<BasicVaultInstructionParameters> = object(
  { storeInVault: ['store_in_vault', optional(vaultingInstructionEnumSchema)] }
);