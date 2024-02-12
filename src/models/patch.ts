/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';
import { PatchOpEnum, patchOpEnumSchema } from './patchOpEnum';

/** The JSON patch object to apply partial updates to resources. */
export interface Patch {
  /** The operation. */
  op: PatchOpEnum;
  /** The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location at which to complete the operation. */
  path?: string;
  /** The value to apply. The <code>remove</code>, <code>copy</code>, and <code>move</code> operations do not require a value. Since <a href="https://www.rfc-editor.org/rfc/rfc69021">JSON Patch</a> allows any type for <code>value</code>, the <code>type</code> property is not specified. */
  value?: unknown;
  /** The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location from which to move the value. Required for the <code>move</code> operation. */
  from?: string;
}

export const patchSchema: Schema<Patch> = object({
  op: ['op', patchOpEnumSchema],
  path: ['path', optional(string())],
  value: ['value', optional(unknown())],
  from: ['from', optional(string())],
});
