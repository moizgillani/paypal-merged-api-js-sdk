/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  IncompatibleParameterValue3DescriptionEnum,
  incompatibleParameterValue3DescriptionEnumSchema,
} from './incompatibleParameterValue3DescriptionEnum';
import {
  IncompatibleParameterValue3IssueEnum,
  incompatibleParameterValue3IssueEnumSchema,
} from './incompatibleParameterValue3IssueEnum';

export interface INCOMPATIBLEPARAMETERVALUEERRORRESPONSE {
  issue?: IncompatibleParameterValue3IssueEnum;
  description?: IncompatibleParameterValue3DescriptionEnum;
}

export const iNCOMPATIBLEPARAMETERVALUEERRORRESPONSESchema: Schema<INCOMPATIBLEPARAMETERVALUEERRORRESPONSE> = object(
  {
    issue: ['issue', optional(incompatibleParameterValue3IssueEnumSchema)],
    description: [
      'description',
      optional(incompatibleParameterValue3DescriptionEnumSchema),
    ],
  }
);
