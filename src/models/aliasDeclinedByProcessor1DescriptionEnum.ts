/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AliasDeclinedByProcessor1DescriptionEnum
 */
export enum AliasDeclinedByProcessor1DescriptionEnum {
  EnumTheProvidedAliasWasDeclinedByTheProcessorPleaseCreateANewOrderWithADifferentAliasKeyAndorAliasLabelAndTryAgain = 'The provided alias was declined by the processor. Please create a new order with a different alias_key and/or alias_label and try again.',
}

/**
 * Schema for AliasDeclinedByProcessor1DescriptionEnum
 */
export const aliasDeclinedByProcessor1DescriptionEnumSchema: Schema<AliasDeclinedByProcessor1DescriptionEnum> = stringEnum(AliasDeclinedByProcessor1DescriptionEnum);