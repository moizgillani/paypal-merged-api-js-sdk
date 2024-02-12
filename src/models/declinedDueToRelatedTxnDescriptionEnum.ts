/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DeclinedDueToRelatedTxnDescriptionEnum
 */
export enum DeclinedDueToRelatedTxnDescriptionEnum {
  EnumOneOrMoreTransactionsInThisOrderDidNotSucceedSinceThisOrderIsBeingProcessedAsAnAllOrNoneOrderIfOneOrMoreTransactionsInThisOrderDoNotSucceedThenAllPurchaseUnitsAreMarkedDeclinedAndWillNotBeProcessed = 'One or more transactions in this Order did not succeed. Since this Order is being processed as an All or None Order, if one or more transactions in this Order do not succeed, then all purchase units are marked declined and will not be processed.',
}

/**
 * Schema for DeclinedDueToRelatedTxnDescriptionEnum
 */
export const declinedDueToRelatedTxnDescriptionEnumSchema: Schema<DeclinedDueToRelatedTxnDescriptionEnum> = stringEnum(DeclinedDueToRelatedTxnDescriptionEnum);