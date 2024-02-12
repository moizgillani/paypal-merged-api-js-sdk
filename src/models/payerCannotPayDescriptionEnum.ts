/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayerCannotPayDescriptionEnum
 */
export enum PayerCannotPayDescriptionEnum {
  EnumCombinationOfPayerAndPayeeSettingsMeanThatThisBuyerCannotPayThisSeller = 'Combination of payer and payee settings mean that this buyer cannot pay this seller.',
}

/**
 * Schema for PayerCannotPayDescriptionEnum
 */
export const payerCannotPayDescriptionEnumSchema: Schema<PayerCannotPayDescriptionEnum> = stringEnum(PayerCannotPayDescriptionEnum);