/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OnlyOneBankSourceAllowed1DescriptionEnum
 */
export enum OnlyOneBankSourceAllowed1DescriptionEnum {
  EnumMoreThanOnePaymentMethodWithinTheBankPaymentObjectIsNotSupported = 'More than one payment method within the bank payment object is not supported.',
}

/**
 * Schema for OnlyOneBankSourceAllowed1DescriptionEnum
 */
export const onlyOneBankSourceAllowed1DescriptionEnumSchema: Schema<OnlyOneBankSourceAllowed1DescriptionEnum> = stringEnum(OnlyOneBankSourceAllowed1DescriptionEnum);
