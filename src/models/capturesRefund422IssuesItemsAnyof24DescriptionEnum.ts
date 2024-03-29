/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CapturesRefund422IssuesItemsAnyof24DescriptionEnum
 */
export enum CapturesRefund422IssuesItemsAnyof24DescriptionEnum {
  EnumTheAPICallerAccountIsNotSetupToBeAbleToProcessRefundsWithPlatformFeesPleaseContactYourAccountManagerThisFeatureIsUsefulWhenYouWantToContributeAPortionOfThePlatformFeesYouHadCaptureAsPartOfTheRefundBeingProcessed = 'The API Caller account is not setup to be able to process refunds with \'platform_fees\'. Please contact your Account Manager. This feature is useful when you want to contribute a portion of the \'platform_fees\' you had capture as part of the refund being processed.',
}

/**
 * Schema for CapturesRefund422IssuesItemsAnyof24DescriptionEnum
 */
export const capturesRefund422IssuesItemsAnyof24DescriptionEnumSchema: Schema<CapturesRefund422IssuesItemsAnyof24DescriptionEnum> = stringEnum(CapturesRefund422IssuesItemsAnyof24DescriptionEnum);
