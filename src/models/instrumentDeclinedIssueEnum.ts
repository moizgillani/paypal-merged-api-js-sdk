/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InstrumentDeclinedIssueEnum
 */
export enum InstrumentDeclinedIssueEnum {
  INSTRUMENTDECLINED = 'INSTRUMENT_DECLINED',
}

/**
 * Schema for InstrumentDeclinedIssueEnum
 */
export const instrumentDeclinedIssueEnumSchema: Schema<InstrumentDeclinedIssueEnum> = stringEnum(InstrumentDeclinedIssueEnum);
