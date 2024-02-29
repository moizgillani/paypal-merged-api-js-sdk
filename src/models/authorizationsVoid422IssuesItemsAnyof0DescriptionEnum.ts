/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthorizationsVoid422IssuesItemsAnyof0DescriptionEnum
 */
export enum AuthorizationsVoid422IssuesItemsAnyof0DescriptionEnum {
  EnumAuthorizationHasBeenPreviouslyCapturedAndHenceCannotBeVoided = 'Authorization has been previously captured and hence cannot be voided.',
}

/**
 * Schema for AuthorizationsVoid422IssuesItemsAnyof0DescriptionEnum
 */
export const authorizationsVoid422IssuesItemsAnyof0DescriptionEnumSchema: Schema<AuthorizationsVoid422IssuesItemsAnyof0DescriptionEnum> = stringEnum(AuthorizationsVoid422IssuesItemsAnyof0DescriptionEnum);
