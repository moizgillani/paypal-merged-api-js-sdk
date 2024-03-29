/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankNotSupportedForVerificationDescriptionEnum
 */
export enum BankNotSupportedForVerificationDescriptionEnum {
  EnumVerificationForThisBankAccountIsNotSupported = 'Verification for this bank account is not supported.',
}

/**
 * Schema for BankNotSupportedForVerificationDescriptionEnum
 */
export const bankNotSupportedForVerificationDescriptionEnumSchema: Schema<BankNotSupportedForVerificationDescriptionEnum> = stringEnum(BankNotSupportedForVerificationDescriptionEnum);
