/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PnrefExpired1DescriptionEnum
 */
export enum PnrefExpired1DescriptionEnum {
  EnumSpecifiedPnrefHasExpiredPNREFExpires15MonthsAfterTheDateOfTheInitialTransaction = 'Specified `pnref` has expired. PNREF expires 15 months after the date of the initial transaction.',
}

/**
 * Schema for PnrefExpired1DescriptionEnum
 */
export const pnrefExpired1DescriptionEnumSchema: Schema<PnrefExpired1DescriptionEnum> = stringEnum(PnrefExpired1DescriptionEnum);
