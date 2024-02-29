/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthorizationsVoid422IssuesItemsAnyof2DescriptionEnum
 */
export enum AuthorizationsVoid422IssuesItemsAnyof2DescriptionEnum {
  EnumAReauthorizationCannotBeVoidedPleaseVoidTheOriginalParentAuthorization = 'A reauthorization cannot be voided. Please void the original parent authorization.',
}

/**
 * Schema for AuthorizationsVoid422IssuesItemsAnyof2DescriptionEnum
 */
export const authorizationsVoid422IssuesItemsAnyof2DescriptionEnumSchema: Schema<AuthorizationsVoid422IssuesItemsAnyof2DescriptionEnum> = stringEnum(AuthorizationsVoid422IssuesItemsAnyof2DescriptionEnum);
