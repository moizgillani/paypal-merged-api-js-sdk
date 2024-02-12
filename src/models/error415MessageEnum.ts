/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Error415MessageEnum
 */
export enum Error415MessageEnum {
  EnumTheServerDoesNotSupportTheRequestPayloadsMediaType = 'The server does not support the request payload\'s media type.',
}

/**
 * Schema for Error415MessageEnum
 */
export const error415MessageEnumSchema: Schema<Error415MessageEnum> = stringEnum(Error415MessageEnum);
