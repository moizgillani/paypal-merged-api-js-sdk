/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for NotSupportedDescriptionEnum
 */
export enum NotSupportedDescriptionEnum {
  EnumThisFieldIsNotCurrentlySupported = 'This field is not currently supported.',
}

/**
 * Schema for NotSupportedDescriptionEnum
 */
export const notSupportedDescriptionEnumSchema: Schema<NotSupportedDescriptionEnum> = stringEnum(NotSupportedDescriptionEnum);