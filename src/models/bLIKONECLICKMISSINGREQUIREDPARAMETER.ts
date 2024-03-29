/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  BlikOneClickMissingRequiredParameterIssueEnum,
  blikOneClickMissingRequiredParameterIssueEnumSchema,
} from './blikOneClickMissingRequiredParameterIssueEnum';
import {
  OneClickFirstTransactionParamsEnum,
  oneClickFirstTransactionParamsEnumSchema,
} from './oneClickFirstTransactionParamsEnum';

export interface BLIKONECLICKMISSINGREQUIREDPARAMETER {
  issue?: BlikOneClickMissingRequiredParameterIssueEnum;
  description?: OneClickFirstTransactionParamsEnum;
}

export const bLIKONECLICKMISSINGREQUIREDPARAMETERSchema: Schema<BLIKONECLICKMISSINGREQUIREDPARAMETER> = object(
  {
    issue: [
      'issue',
      optional(blikOneClickMissingRequiredParameterIssueEnumSchema),
    ],
    description: [
      'description',
      optional(oneClickFirstTransactionParamsEnumSchema),
    ],
  }
);
