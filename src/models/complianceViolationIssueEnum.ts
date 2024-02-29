/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ComplianceViolationIssueEnum
 */
export enum ComplianceViolationIssueEnum {
  COMPLIANCEVIOLATION = 'COMPLIANCE_VIOLATION',
}

/**
 * Schema for ComplianceViolationIssueEnum
 */
export const complianceViolationIssueEnumSchema: Schema<ComplianceViolationIssueEnum> = stringEnum(ComplianceViolationIssueEnum);
