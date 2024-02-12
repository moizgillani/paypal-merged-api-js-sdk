/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** The tokenized payment source to fund a payment. */
export interface Token {
  /** The PayPal-generated ID for the token. */
  id: string;
  /** The tokenization method that generated the ID. */
  type: string;
}

export const tokenSchema: Schema<Token> = object({
  id: ['id', string()],
  type: ['type', string()],
});
