/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import { VaultStatusEnum, vaultStatusEnumSchema } from './vaultStatusEnum';

/** Additional attributes associated with the use of this card. */
export interface CardAttributesResponse {
  /** The vault status. */
  vault?: VaultStatusEnum;
}

export const cardAttributesResponseSchema: Schema<CardAttributesResponse> = object(
  { vault: ['vault', optional(vaultStatusEnumSchema)] }
);
