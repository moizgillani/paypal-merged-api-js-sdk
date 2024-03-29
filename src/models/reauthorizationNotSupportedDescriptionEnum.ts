/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ReauthorizationNotSupportedDescriptionEnum
 */
export enum ReauthorizationNotSupportedDescriptionEnum {
  EnumAReauthorizeCannotBeAttemptedOnAnAuthorizationIdThatIsTheResultOfAPriorReauthorizationOrOnAnAuthorizationMadeOnAnOrderSavedUsingTheV2ordersidsaveAPI = 'A reauthorize cannot be attempted on an authorization_id that is the result of a prior reauthorization or on an authorization made on an Order saved using the `v2/orders/id/save` API.',
}

/**
 * Schema for ReauthorizationNotSupportedDescriptionEnum
 */
export const reauthorizationNotSupportedDescriptionEnumSchema: Schema<ReauthorizationNotSupportedDescriptionEnum> = stringEnum(ReauthorizationNotSupportedDescriptionEnum);
