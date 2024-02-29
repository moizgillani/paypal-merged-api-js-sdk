/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ActionDoesNotMatchIntentDescriptionEnum
 */
export enum ActionDoesNotMatchIntentDescriptionEnum {
  EnumOrderWasCreatedWithAnIntentToCAPTUREPleaseUseV2checkoutordersorderIdcaptureToCompleteTheTransactionOrAlternatelyCreateAnOrderWithAnIntentOfAUTHORIZE = 'Order was created with an intent to \'CAPTURE\'. Please use v2/checkout/orders/order_id/capture to complete the transaction or alternately Create an order with an intent of \'AUTHORIZE\'.',
}

/**
 * Schema for ActionDoesNotMatchIntentDescriptionEnum
 */
export const actionDoesNotMatchIntentDescriptionEnumSchema: Schema<ActionDoesNotMatchIntentDescriptionEnum> = stringEnum(ActionDoesNotMatchIntentDescriptionEnum);
