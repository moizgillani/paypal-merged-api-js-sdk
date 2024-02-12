/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvalidPreviousTxReferenceEnum
 */
export enum InvalidPreviousTxReferenceEnum {
  EnumTheAuthorizationOrCaptureReferencedByPreviousTransactionReferenceIsNotValidThisCouldBeEitherBecauseThePreviousTransactionReferenceIsNotFoundOrDoesntBelongToThePayeePleaseUseAValidPreviousTransactionReference = 'The authorization or capture referenced by `previous_transaction_reference` is not valid. This could be either because the previous_transaction_reference is not found or doesn\'t belong to the payee. Please use a valid `previous_transaction_reference`.',
}

/**
 * Schema for InvalidPreviousTxReferenceEnum
 */
export const invalidPreviousTxReferenceEnumSchema: Schema<InvalidPreviousTxReferenceEnum> = stringEnum(InvalidPreviousTxReferenceEnum);