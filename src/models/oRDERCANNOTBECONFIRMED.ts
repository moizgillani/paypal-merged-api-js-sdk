/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  OrderCannotBeConfirmedDescriptionEnum,
  orderCannotBeConfirmedDescriptionEnumSchema,
} from './orderCannotBeConfirmedDescriptionEnum';
import {
  OrderCannotBeConfirmedIssueEnum,
  orderCannotBeConfirmedIssueEnumSchema,
} from './orderCannotBeConfirmedIssueEnum';

export interface ORDERCANNOTBECONFIRMED {
  issue?: OrderCannotBeConfirmedIssueEnum;
  description?: OrderCannotBeConfirmedDescriptionEnum;
}

export const oRDERCANNOTBECONFIRMEDSchema: Schema<ORDERCANNOTBECONFIRMED> = object(
  {
    issue: ['issue', optional(orderCannotBeConfirmedIssueEnumSchema)],
    description: [
      'description',
      optional(orderCannotBeConfirmedDescriptionEnumSchema),
    ],
  }
);
