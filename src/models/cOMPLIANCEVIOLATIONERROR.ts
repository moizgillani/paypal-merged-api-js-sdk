/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ComplianceViolation1DescriptionEnum,
  complianceViolation1DescriptionEnumSchema,
} from './complianceViolation1DescriptionEnum';
import {
  ComplianceViolation1IssueEnum,
  complianceViolation1IssueEnumSchema,
} from './complianceViolation1IssueEnum';

export interface COMPLIANCEVIOLATIONERROR {
  issue?: ComplianceViolation1IssueEnum;
  description?: ComplianceViolation1DescriptionEnum;
}

export const cOMPLIANCEVIOLATIONERRORSchema: Schema<COMPLIANCEVIOLATIONERROR> = object(
  {
    issue: ['issue', optional(complianceViolation1IssueEnumSchema)],
    description: [
      'description',
      optional(complianceViolation1DescriptionEnumSchema),
    ],
  }
);
