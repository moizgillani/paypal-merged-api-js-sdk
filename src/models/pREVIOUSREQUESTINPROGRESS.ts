/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  Conflicterror409responseIssuesItemsAnyof0IssueEnum,
  conflicterror409responseIssuesItemsAnyof0IssueEnumSchema,
} from './conflicterror409responseIssuesItemsAnyof0IssueEnum';
import {
  PreviousRequestInProgressDescriptionEnum,
  previousRequestInProgressDescriptionEnumSchema,
} from './previousRequestInProgressDescriptionEnum';

export interface PREVIOUSREQUESTINPROGRESS {
  issue?: Conflicterror409responseIssuesItemsAnyof0IssueEnum;
  description?: PreviousRequestInProgressDescriptionEnum;
}

export const pREVIOUSREQUESTINPROGRESSSchema: Schema<PREVIOUSREQUESTINPROGRESS> = object(
  {
    issue: [
      'issue',
      optional(conflicterror409responseIssuesItemsAnyof0IssueEnumSchema),
    ],
    description: [
      'description',
      optional(previousRequestInProgressDescriptionEnumSchema),
    ],
  }
);
