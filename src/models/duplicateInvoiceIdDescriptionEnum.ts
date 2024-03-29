/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DuplicateInvoiceIdDescriptionEnum
 */
export enum DuplicateInvoiceIdDescriptionEnum {
  EnumDuplicateInvoiceIDDetectedToAvoidAPotentialDuplicateTransactionYourAccountSettingRequiresThatInvoiceIdBeUniqueForEachTransaction = 'Duplicate Invoice ID detected. To avoid a potential duplicate transaction your account setting requires that Invoice Id be unique for each transaction.',
}

/**
 * Schema for DuplicateInvoiceIdDescriptionEnum
 */
export const duplicateInvoiceIdDescriptionEnumSchema: Schema<DuplicateInvoiceIdDescriptionEnum> = stringEnum(DuplicateInvoiceIdDescriptionEnum);
