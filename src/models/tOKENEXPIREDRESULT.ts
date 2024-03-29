/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  TokenExpired2DescriptionEnum,
  tokenExpired2DescriptionEnumSchema,
} from './tokenExpired2DescriptionEnum';
import {
  TokenExpired2IssueEnum,
  tokenExpired2IssueEnumSchema,
} from './tokenExpired2IssueEnum';

export interface TOKENEXPIREDRESULT {
  issue?: TokenExpired2IssueEnum;
  description?: TokenExpired2DescriptionEnum;
}

export const tOKENEXPIREDRESULTSchema: Schema<TOKENEXPIREDRESULT> = object({
  issue: ['issue', optional(tokenExpired2IssueEnumSchema)],
  description: ['description', optional(tokenExpired2DescriptionEnumSchema)],
});
