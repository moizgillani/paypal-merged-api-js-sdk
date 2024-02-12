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
import { ContactTypeEnum, contactTypeEnumSchema } from './contactTypeEnum';
import { PartyName, partyNameSchema } from './partyName';
import {
  PayPalWalletAttributesResponse,
  payPalWalletAttributesResponseSchema,
} from './payPalWalletAttributesResponse';
import {
  PortableInternationalPostalAddress,
  portableInternationalPostalAddressSchema,
} from './portableInternationalPostalAddress';
import { TaxInformation, taxInformationSchema } from './taxInformation';

/** The PayPal Wallet response. */
export interface PayPalWalletResponse {
  /** The email address of the PayPal account holder. */
  emailAddress?: string;
  /** The PayPal-assigned ID for the PayPal account holder. */
  accountId?: string;
  /** The name of the PayPal account holder. Supports only the `given_name` and `surname` properties. */
  name?: PartyName;
  /** The phone type. */
  phoneType?: ContactTypeEnum;
  /** The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. Supports only the `national_number` property. */
  phoneNumber?: CanonicalInternationalPhoneNumber;
  /** The birth date of the PayPal account holder in `YYYY-MM-DD` format. */
  birthDate?: string;
  /** The tax information of the PayPal account holder. Required only for Brazilian PayPal account holder's. Both `tax_id` and `tax_id_type` are required. */
  taxInfo?: TaxInformation;
  /** The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. */
  address?: PortableInternationalPostalAddress;
  /** Additional attributes associated with the use of a PayPal Wallet. */
  attributes?: PayPalWalletAttributesResponse;
}

export const payPalWalletResponseSchema: Schema<PayPalWalletResponse> = object({
  emailAddress: ['email_address', optional(string())],
  accountId: ['account_id', optional(string())],
  name: ['name', optional(lazy(() => partyNameSchema))],
  phoneType: ['phone_type', optional(contactTypeEnumSchema)],
  phoneNumber: [
    'phone_number',
    optional(lazy(() => canonicalInternationalPhoneNumberSchema)),
  ],
  birthDate: ['birth_date', optional(string())],
  taxInfo: ['tax_info', optional(lazy(() => taxInformationSchema))],
  address: [
    'address',
    optional(lazy(() => portableInternationalPostalAddressSchema)),
  ],
  attributes: [
    'attributes',
    optional(lazy(() => payPalWalletAttributesResponseSchema)),
  ],
});
