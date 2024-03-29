/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DuplicateInvoiceIdIssueEnum
 */
export enum DuplicateInvoiceIdIssueEnum {
  DUPLICATEINVOICEID = 'DUPLICATE_INVOICE_ID',
}

/**
 * Schema for DuplicateInvoiceIdIssueEnum
 */
export const duplicateInvoiceIdIssueEnumSchema: Schema<DuplicateInvoiceIdIssueEnum> = stringEnum(DuplicateInvoiceIdIssueEnum);
