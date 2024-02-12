/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OnlyOneBankSourceAllowedDescriptionEnum
 */
export enum OnlyOneBankSourceAllowedDescriptionEnum {
  EnumMoreThanOnePaymentMethodWithinTheBankPaymentObjectIsNotSupported = 'More than one payment method within the bank payment object is not supported.',
}

/**
 * Schema for OnlyOneBankSourceAllowedDescriptionEnum
 */
export const onlyOneBankSourceAllowedDescriptionEnumSchema: Schema<OnlyOneBankSourceAllowedDescriptionEnum> = stringEnum(OnlyOneBankSourceAllowedDescriptionEnum);