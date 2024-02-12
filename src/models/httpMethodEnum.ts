/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for HttpMethodEnum
 */
export enum HttpMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  CONNECT = 'CONNECT',
  OPTIONS = 'OPTIONS',
  PATCH = 'PATCH',
}

/**
 * Schema for HttpMethodEnum
 */
export const httpMethodEnumSchema: Schema<HttpMethodEnum> = stringEnum(HttpMethodEnum);
