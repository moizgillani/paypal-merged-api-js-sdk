/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PreviousRequestInProgressDescriptionEnum
 */
export enum PreviousRequestInProgressDescriptionEnum {
  EnumAPreviousRequestOnThisResourceIsCurrentlyInProgressPleaseWaitForSometimeAndTryAgainItIsBestToSpaceOutTheInitialAndTheSubsequentRequestsToAvoidReceivingThisError = 'A previous request on this resource is currently in progress. Please wait for sometime and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error.',
}

/**
 * Schema for PreviousRequestInProgressDescriptionEnum
 */
export const previousRequestInProgressDescriptionEnumSchema: Schema<PreviousRequestInProgressDescriptionEnum> = stringEnum(PreviousRequestInProgressDescriptionEnum);
