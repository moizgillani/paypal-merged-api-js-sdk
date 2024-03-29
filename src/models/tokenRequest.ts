/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';

/** The Tokenized Payment Source representing a Request to Vault a Token. */
export interface TokenRequest {
  /** The PayPal-generated ID for the token. */
  id: string;
  /** The tokenization method that generated the ID. */
  type: string;
  /** The auxiliary details of the token. */
  attributes?: unknown;
}

export const tokenRequestSchema: Schema<TokenRequest> = object({
  id: ['id', string()],
  type: ['type', string()],
  attributes: ['attributes', optional(unknown())],
});
