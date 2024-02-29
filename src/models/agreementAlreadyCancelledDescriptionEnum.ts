/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AgreementAlreadyCancelledDescriptionEnum
 */
export enum AgreementAlreadyCancelledDescriptionEnum {
  EnumTheRequestedAgreementIsAlreadyCanceled = 'The requested agreement is already canceled.',
}

/**
 * Schema for AgreementAlreadyCancelledDescriptionEnum
 */
export const agreementAlreadyCancelledDescriptionEnumSchema: Schema<AgreementAlreadyCancelledDescriptionEnum> = stringEnum(AgreementAlreadyCancelledDescriptionEnum);
