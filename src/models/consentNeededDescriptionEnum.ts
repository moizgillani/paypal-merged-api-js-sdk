/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ConsentNeededDescriptionEnum
 */
export enum ConsentNeededDescriptionEnum {
  CONSENTNEEDED = 'CONSENT_NEEDED',
}

/**
 * Schema for ConsentNeededDescriptionEnum
 */
export const consentNeededDescriptionEnumSchema: Schema<ConsentNeededDescriptionEnum> = stringEnum(ConsentNeededDescriptionEnum);
