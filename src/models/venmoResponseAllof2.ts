/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface VenmoResponseAllof2 {
  /** The Venmo username, as chosen by the user. */
  userName?: string;
}

export const venmoResponseAllof2Schema: Schema<VenmoResponseAllof2> = object({
  userName: ['user_name', optional(string())],
});