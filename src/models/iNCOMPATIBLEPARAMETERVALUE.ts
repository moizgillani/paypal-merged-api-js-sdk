/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  IncompatibleParameterValueDescriptionEnum,
  incompatibleParameterValueDescriptionEnumSchema,
} from './incompatibleParameterValueDescriptionEnum';
import {
  IncompatibleParameterValueIssueEnum,
  incompatibleParameterValueIssueEnumSchema,
} from './incompatibleParameterValueIssueEnum';

export interface INCOMPATIBLEPARAMETERVALUE {
  issue?: IncompatibleParameterValueIssueEnum;
  description?: IncompatibleParameterValueDescriptionEnum;
}

export const iNCOMPATIBLEPARAMETERVALUESchema: Schema<INCOMPATIBLEPARAMETERVALUE> = object(
  {
    issue: ['issue', optional(incompatibleParameterValueIssueEnumSchema)],
    description: [
      'description',
      optional(incompatibleParameterValueDescriptionEnumSchema),
    ],
  }
);
