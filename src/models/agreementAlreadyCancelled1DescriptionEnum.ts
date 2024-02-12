/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AgreementAlreadyCancelled1DescriptionEnum
 */
export enum AgreementAlreadyCancelled1DescriptionEnum {
  EnumTheRequestedAgreementIsAlreadyCanceled = 'The requested agreement is already canceled.',
}

/**
 * Schema for AgreementAlreadyCancelled1DescriptionEnum
 */
export const agreementAlreadyCancelled1DescriptionEnumSchema: Schema<AgreementAlreadyCancelled1DescriptionEnum> = stringEnum(AgreementAlreadyCancelled1DescriptionEnum);
