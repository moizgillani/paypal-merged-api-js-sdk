/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  VaultInstructionRequired1DescriptionEnum,
  vaultInstructionRequired1DescriptionEnumSchema,
} from './vaultInstructionRequired1DescriptionEnum';
import {
  VaultInstructionRequired1IssueEnum,
  vaultInstructionRequired1IssueEnumSchema,
} from './vaultInstructionRequired1IssueEnum';

export interface VAULTINSTRUCTIONREQUIREDERROR {
  issue?: VaultInstructionRequired1IssueEnum;
  description?: VaultInstructionRequired1DescriptionEnum;
}

export const vAULTINSTRUCTIONREQUIREDERRORSchema: Schema<VAULTINSTRUCTIONREQUIREDERROR> = object(
  {
    issue: ['issue', optional(vaultInstructionRequired1IssueEnumSchema)],
    description: [
      'description',
      optional(vaultInstructionRequired1DescriptionEnumSchema),
    ],
  }
);
