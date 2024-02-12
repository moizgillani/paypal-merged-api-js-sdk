/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  PnrefNotFound2DescriptionEnum,
  pnrefNotFound2DescriptionEnumSchema,
} from './pnrefNotFound2DescriptionEnum';
import {
  PnrefNotFound2IssueEnum,
  pnrefNotFound2IssueEnumSchema,
} from './pnrefNotFound2IssueEnum';

export interface PNREFNOTFOUNDRESULT {
  issue?: PnrefNotFound2IssueEnum;
  description?: PnrefNotFound2DescriptionEnum;
}

export const pNREFNOTFOUNDRESULTSchema: Schema<PNREFNOTFOUNDRESULT> = object({
  issue: ['issue', optional(pnrefNotFound2IssueEnumSchema)],
  description: ['description', optional(pnrefNotFound2DescriptionEnumSchema)],
});