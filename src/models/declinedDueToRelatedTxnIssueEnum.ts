/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DeclinedDueToRelatedTxnIssueEnum
 */
export enum DeclinedDueToRelatedTxnIssueEnum {
  DECLINEDDUETORELATEDTXN = 'DECLINED_DUE_TO_RELATED_TXN',
}

/**
 * Schema for DeclinedDueToRelatedTxnIssueEnum
 */
export const declinedDueToRelatedTxnIssueEnumSchema: Schema<DeclinedDueToRelatedTxnIssueEnum> = stringEnum(DeclinedDueToRelatedTxnIssueEnum);