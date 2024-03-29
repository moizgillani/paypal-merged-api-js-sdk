/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  RedirectPayerForAlternateFundingDescriptionEnum,
  redirectPayerForAlternateFundingDescriptionEnumSchema,
} from './redirectPayerForAlternateFundingDescriptionEnum';
import {
  RedirectPayerForAlternateFundingIssueEnum,
  redirectPayerForAlternateFundingIssueEnumSchema,
} from './redirectPayerForAlternateFundingIssueEnum';

export interface REDIRECTPAYERFORALTERNATEFUNDING {
  issue?: RedirectPayerForAlternateFundingIssueEnum;
  description?: RedirectPayerForAlternateFundingDescriptionEnum;
}

export const rEDIRECTPAYERFORALTERNATEFUNDINGSchema: Schema<REDIRECTPAYERFORALTERNATEFUNDING> = object(
  {
    issue: ['issue', optional(redirectPayerForAlternateFundingIssueEnumSchema)],
    description: [
      'description',
      optional(redirectPayerForAlternateFundingDescriptionEnumSchema),
    ],
  }
);
