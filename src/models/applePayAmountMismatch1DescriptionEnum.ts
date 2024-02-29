/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ApplePayAmountMismatch1DescriptionEnum
 */
export enum ApplePayAmountMismatch1DescriptionEnum {
  EnumTheAmountSpecifiedInTheOrderShouldMatchTheAmountThatWasViewedAndAuthorizedByThePayerbuyerOnApplePayIfTheAmountHasChangedPleaseRedirectTheBuyerToAuthorizeTheOrderAgainViaApplePay = 'The \'amount\' specified in the Order should match the amount that was viewed and authorized by the payer/buyer on Apple Pay. If the amount has changed, please redirect the buyer to authorize the order again via Apple Pay.',
}

/**
 * Schema for ApplePayAmountMismatch1DescriptionEnum
 */
export const applePayAmountMismatch1DescriptionEnumSchema: Schema<ApplePayAmountMismatch1DescriptionEnum> = stringEnum(ApplePayAmountMismatch1DescriptionEnum);
