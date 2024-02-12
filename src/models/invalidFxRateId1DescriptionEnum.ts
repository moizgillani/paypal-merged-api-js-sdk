/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidFxRateId1DescriptionEnum
 */
export enum InvalidFxRateId1DescriptionEnum {
  EnumTheSpecificFXRateIDIsNotValidThisCouldBeEitherBecauseWeAreNotAbleToLookUpTheFXRateBasedOnThisIDOrItCouldBeBecauseTheIDBelongsToAnotherAPICaller = 'The specific FX Rate ID is not valid. This could be either because we are not able to look up the FX Rate based on this ID or it could be because the ID belongs to another API Caller.',
}

/**
 * Schema for InvalidFxRateId1DescriptionEnum
 */
export const invalidFxRateId1DescriptionEnumSchema: Schema<InvalidFxRateId1DescriptionEnum> = stringEnum(InvalidFxRateId1DescriptionEnum);
