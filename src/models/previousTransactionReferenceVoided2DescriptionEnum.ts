/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PreviousTransactionReferenceVoided2DescriptionEnum
 */
export enum PreviousTransactionReferenceVoided2DescriptionEnum {
  EnumTheStatusOfAuthorizationReferencedByPreviousTransactionReferenceIsVOIDEDAndHenceCannotBeUsedForThisOrderPleaseUseAPreviousTransactionReferenceWhoseStatusIsNotVOIDED = 'The status of authorization referenced by `previous_transaction_reference` is `VOIDED` and hence cannot be used for this order. Please use a `previous_transaction_reference` whose status is not `VOIDED`.',
}

/**
 * Schema for PreviousTransactionReferenceVoided2DescriptionEnum
 */
export const previousTransactionReferenceVoided2DescriptionEnumSchema: Schema<PreviousTransactionReferenceVoided2DescriptionEnum> = stringEnum(PreviousTransactionReferenceVoided2DescriptionEnum);
