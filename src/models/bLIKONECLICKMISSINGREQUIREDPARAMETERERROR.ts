/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  BlikOneClickFirstTransactionParamsEnum,
  blikOneClickFirstTransactionParamsEnumSchema,
} from './blikOneClickFirstTransactionParamsEnum';
import {
  BlikOneClickMissingRequiredParameter1IssueEnum,
  blikOneClickMissingRequiredParameter1IssueEnumSchema,
} from './blikOneClickMissingRequiredParameter1IssueEnum';

export interface BLIKONECLICKMISSINGREQUIREDPARAMETERERROR {
  issue?: BlikOneClickMissingRequiredParameter1IssueEnum;
  description?: BlikOneClickFirstTransactionParamsEnum;
}

export const bLIKONECLICKMISSINGREQUIREDPARAMETERERRORSchema: Schema<BLIKONECLICKMISSINGREQUIREDPARAMETERERROR> = object(
  {
    issue: [
      'issue',
      optional(blikOneClickMissingRequiredParameter1IssueEnumSchema),
    ],
    description: [
      'description',
      optional(blikOneClickFirstTransactionParamsEnumSchema),
    ],
  }
);
