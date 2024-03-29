/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BlikOneClickFirstTransactionParamsEnum
 */
export enum BlikOneClickFirstTransactionParamsEnum {
  EnumBliksOneClickFlowRequiresOneClickauthCodeAndOneClickaliasLabelParametersForTheBuyersFirstTransactionForAllSubsequentTransactionsonlyTheOneClickaliasKeyParameterIsRequired = 'Blik\'s one_click flow requires one_click.auth_code and one_click.alias_label parameters for the buyer\'s first transaction. For all subsequent transactions,only the one_click.alias_key parameter is required.',
}

/**
 * Schema for BlikOneClickFirstTransactionParamsEnum
 */
export const blikOneClickFirstTransactionParamsEnumSchema: Schema<BlikOneClickFirstTransactionParamsEnum> = stringEnum(BlikOneClickFirstTransactionParamsEnum);
