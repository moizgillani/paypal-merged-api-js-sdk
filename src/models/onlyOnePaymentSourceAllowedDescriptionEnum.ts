/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OnlyOnePaymentSourceAllowedDescriptionEnum
 */
export enum OnlyOnePaymentSourceAllowedDescriptionEnum {
  EnumMoreThanOnePaymentMethodWithinThePaymentSourceIsNotSupported = 'More than one payment method within the payment source is not supported.',
}

/**
 * Schema for OnlyOnePaymentSourceAllowedDescriptionEnum
 */
export const onlyOnePaymentSourceAllowedDescriptionEnumSchema: Schema<OnlyOnePaymentSourceAllowedDescriptionEnum> = stringEnum(OnlyOnePaymentSourceAllowedDescriptionEnum);
