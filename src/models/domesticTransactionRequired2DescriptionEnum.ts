/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DomesticTransactionRequired2DescriptionEnum
 */
export enum DomesticTransactionRequired2DescriptionEnum {
  EnumThisTransactionRequiresThePayeeAndPayerToBeResidentInTheSameCountryADomesticTransactionIsRequiredToCreateThisPayment = 'This transaction requires the payee and payer to be resident in the same country, a domestic transaction is required to create this payment.',
}

/**
 * Schema for DomesticTransactionRequired2DescriptionEnum
 */
export const domesticTransactionRequired2DescriptionEnumSchema: Schema<DomesticTransactionRequired2DescriptionEnum> = stringEnum(DomesticTransactionRequired2DescriptionEnum);
