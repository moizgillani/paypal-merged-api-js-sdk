/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Customer in merchant's or partner's system of records. */
export interface CustomerRequest {
  /** The unique ID for a customer in merchant's or partner's system of records. */
  id?: string;
}

export const customerRequestSchema: Schema<CustomerRequest> = object({
  id: ['id', optional(string())],
});
