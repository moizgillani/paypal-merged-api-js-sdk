/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  CanonicalInternationalPhoneNumber,
  canonicalInternationalPhoneNumberSchema,
} from './canonicalInternationalPhoneNumber';
import { PartyName, partyNameSchema } from './partyName';
import {
  PortableInternationalPostalAddress,
  portableInternationalPostalAddressSchema,
} from './portableInternationalPostalAddress';
import {
  VenmoWalletAttributesResponse,
  venmoWalletAttributesResponseSchema,
} from './venmoWalletAttributesResponse';

/** Venmo wallet response. */
export interface VenmoWalletResponseObject {
  /** The email address of the payer. */
  emailAddress?: string;
  /** This is an immutable system-generated id for a user's Venmo account. */
  accountId?: string;
  /** The Venmo user name chosen by the user, also know as a Venmo handle. */
  userName?: string;
  /** The name associated with the Venmo account. Supports only the `given_name` and `surname` properties. */
  name?: PartyName;
  /** The phone number associated with the Venmo account, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property. */
  phoneNumber?: CanonicalInternationalPhoneNumber;
  /** The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. */
  address?: PortableInternationalPostalAddress;
  /** Additional attributes associated with the use of a Venmo Wallet. */
  attributes?: VenmoWalletAttributesResponse;
}

export const venmoWalletResponseObjectSchema: Schema<VenmoWalletResponseObject> = object(
  {
    emailAddress: ['email_address', optional(string())],
    accountId: ['account_id', optional(string())],
    userName: ['user_name', optional(string())],
    name: ['name', optional(lazy(() => partyNameSchema))],
    phoneNumber: [
      'phone_number',
      optional(lazy(() => canonicalInternationalPhoneNumberSchema)),
    ],
    address: [
      'address',
      optional(lazy(() => portableInternationalPostalAddressSchema)),
    ],
    attributes: [
      'attributes',
      optional(lazy(() => venmoWalletAttributesResponseSchema)),
    ],
  }
);