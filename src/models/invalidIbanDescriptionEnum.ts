/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidIbanDescriptionEnum
 */
export enum InvalidIbanDescriptionEnum {
  EnumIBANProvidedIsNotAValidBankAccountNumber = 'IBAN provided is not a valid bank account number.',
}

/**
 * Schema for InvalidIbanDescriptionEnum
 */
export const invalidIbanDescriptionEnumSchema: Schema<InvalidIbanDescriptionEnum> = stringEnum(InvalidIbanDescriptionEnum);
