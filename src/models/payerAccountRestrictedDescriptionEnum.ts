/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayerAccountRestrictedDescriptionEnum
 */
export enum PayerAccountRestrictedDescriptionEnum {
  PAYERACCOUNTRESTRICTED = 'PAYER_ACCOUNT_RESTRICTED',
}

/**
 * Schema for PayerAccountRestrictedDescriptionEnum
 */
export const payerAccountRestrictedDescriptionEnumSchema: Schema<PayerAccountRestrictedDescriptionEnum> = stringEnum(PayerAccountRestrictedDescriptionEnum);
