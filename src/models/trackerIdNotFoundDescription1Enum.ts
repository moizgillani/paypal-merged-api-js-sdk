/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TrackerIdNotFoundDescription1Enum
 */
export enum TrackerIdNotFoundDescription1Enum {
  EnumSpecifiedTrackerIDDoesNotExistCheckTheTrackerIDAndTryAgain = 'Specified tracker ID does not exist. Check the tracker ID and try again.',
}

/**
 * Schema for TrackerIdNotFoundDescription1Enum
 */
export const trackerIdNotFoundDescription1EnumSchema: Schema<TrackerIdNotFoundDescription1Enum> = stringEnum(TrackerIdNotFoundDescription1Enum);
