/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CityRequired1DescriptionEnum
 */
export enum CityRequired1DescriptionEnum {
  EnumTheSpecifiedCountryRequiresACityAddressadminArea2 = 'The specified country requires a city (address.admin_area_2).',
}

/**
 * Schema for CityRequired1DescriptionEnum
 */
export const cityRequired1DescriptionEnumSchema: Schema<CityRequired1DescriptionEnum> = stringEnum(CityRequired1DescriptionEnum);
