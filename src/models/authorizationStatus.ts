/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AuhorizationStatusDetails,
  auhorizationStatusDetailsSchema,
} from './auhorizationStatusDetails';
import {
  AuthorizedPaymentStatusEnum,
  authorizedPaymentStatusEnumSchema,
} from './authorizedPaymentStatusEnum';

/** The status fields for an authorized payment. */
export interface AuthorizationStatus {
  /** The status for the authorized payment. */
  status?: AuthorizedPaymentStatusEnum;
  /** The details of the authorized order pending status. */
  statusDetails?: AuhorizationStatusDetails;
}

export const authorizationStatusSchema: Schema<AuthorizationStatus> = object({
  status: ['status', optional(authorizedPaymentStatusEnumSchema)],
  statusDetails: [
    'status_details',
    optional(lazy(() => auhorizationStatusDetailsSchema)),
  ],
});
