/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The date and time stamps that are common to authorized payment, captured payment, and refund transactions. */
export interface TransactionDateAndTimeStamps {
  /** The date and time when the transaction occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  createTime?: string;
  /** The date and time when the transaction was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  updateTime?: string;
}

export const transactionDateAndTimeStampsSchema: Schema<TransactionDateAndTimeStamps> = object(
  {
    createTime: ['create_time', optional(string())],
    updateTime: ['update_time', optional(string())],
  }
);