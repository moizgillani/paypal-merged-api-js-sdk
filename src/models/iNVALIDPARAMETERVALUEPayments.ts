/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  InvalidParameterValueDescriptionPaymentsEnum,
  invalidParameterValueDescriptionPaymentsEnumSchema,
} from './invalidParameterValueDescriptionPaymentsEnum';
import {
  InvalidParameterValueIssueEnum,
  invalidParameterValueIssueEnumSchema,
} from './invalidParameterValueIssueEnum';

export interface INVALIDPARAMETERVALUEPayments {
  issue?: InvalidParameterValueIssueEnum;
  description?: InvalidParameterValueDescriptionPaymentsEnum;
}

export const iNVALIDPARAMETERVALUEPaymentsSchema: Schema<INVALIDPARAMETERVALUEPayments> = object(
  {
    issue: ['issue', optional(invalidParameterValueIssueEnumSchema)],
    description: [
      'description',
      optional(invalidParameterValueDescriptionPaymentsEnumSchema),
    ],
  }
);
