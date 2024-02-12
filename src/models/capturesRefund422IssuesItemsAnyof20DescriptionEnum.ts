/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CapturesRefund422IssuesItemsAnyof20DescriptionEnum
 */
export enum CapturesRefund422IssuesItemsAnyof20DescriptionEnum {
  EnumRefundsAreNotAllowedOnThisCaptureDueToAChargebackOnTheCardOrBankPleaseContactThePayeeToResolveTheChargeback = 'Refunds are not allowed on this capture due to a chargeback on the card or bank. Please contact the payee to resolve the chargeback.',
}

/**
 * Schema for CapturesRefund422IssuesItemsAnyof20DescriptionEnum
 */
export const capturesRefund422IssuesItemsAnyof20DescriptionEnumSchema: Schema<CapturesRefund422IssuesItemsAnyof20DescriptionEnum> = stringEnum(CapturesRefund422IssuesItemsAnyof20DescriptionEnum);
