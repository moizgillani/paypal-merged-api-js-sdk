/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Information used to pay using BLIK level_0 flow. */
export interface BLIKLevel0PaymentObject {
  /** 6-digit code used to authenticate a consumer within BLIK. */
  authCode: string;
}

export const bLIKLevel0PaymentObjectSchema: Schema<BLIKLevel0PaymentObject> = object(
  { authCode: ['auth_code', string()] }
);
