/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayeeAccountLockedOrClosedDescriptionPaymentsEnum
 */
export enum PayeeAccountLockedOrClosedDescriptionPaymentsEnum {
  EnumTransactionCouldNotCompleteBecausePayeeAccountIsLockedOrClosed = 'Transaction could not complete because payee account is locked or closed.',
}

/**
 * Schema for PayeeAccountLockedOrClosedDescriptionPaymentsEnum
 */
export const payeeAccountLockedOrClosedDescriptionPaymentsEnumSchema: Schema<PayeeAccountLockedOrClosedDescriptionPaymentsEnum> = stringEnum(PayeeAccountLockedOrClosedDescriptionPaymentsEnum);