/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  MerchantInitiatedMultiplePurchaseUnitsEnum,
  merchantInitiatedMultiplePurchaseUnitsEnumSchema,
} from './merchantInitiatedMultiplePurchaseUnitsEnum';
import {
  MerchInitMultPurchUnitsDescEnum,
  merchInitMultPurchUnitsDescEnumSchema,
} from './merchInitMultPurchUnitsDescEnum';

export interface MERCHANTINITIATEDWITHMULTIPLEPURCHASEUNITS {
  issue?: MerchantInitiatedMultiplePurchaseUnitsEnum;
  description?: MerchInitMultPurchUnitsDescEnum;
}

export const mERCHANTINITIATEDWITHMULTIPLEPURCHASEUNITSSchema: Schema<MERCHANTINITIATEDWITHMULTIPLEPURCHASEUNITS> = object(
  {
    issue: [
      'issue',
      optional(merchantInitiatedMultiplePurchaseUnitsEnumSchema),
    ],
    description: [
      'description',
      optional(merchInitMultPurchUnitsDescEnumSchema),
    ],
  }
);
