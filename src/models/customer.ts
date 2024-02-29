/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { PartyName, partyNameSchema } from './partyName';
import { PhoneWithType, phoneWithTypeSchema } from './phoneWithType';
import {
  PortablePostalAddressMediumGrained,
  portablePostalAddressMediumGrainedSchema,
} from './portablePostalAddressMediumGrained';
import {
  TaxInformationPaymentMethodTokens,
  taxInformationPaymentMethodTokensSchema,
} from './taxInformationPaymentMethodTokens';

/** The customer who approves and pays for the order. The customer is also known as the payer. */
export interface Customer {
  /** The email address of the payer. */
  emailAddress?: string;
  /** The PayPal-assigned ID for the payer. */
  payerId?: string;
  /** The name of the payer. Supports only the `given_name` and `surname` properties. */
  name?: PartyName;
  /** The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. The `phone.phone_number` supports only `national_number`. */
  phone?: PhoneWithType;
  /** The birth date of the payer in `YYYY-MM-DD` format. */
  birthDate?: string;
  /** The tax information of the payer. Required only for Brazilian payer's. Both `tax_id` and `tax_id_type` are required. */
  taxInfo?: TaxInformationPaymentMethodTokens;
  /** The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. */
  address?: PortablePostalAddressMediumGrained;
}

export const customerSchema: Schema<Customer> = object({
  emailAddress: ['email_address', optional(string())],
  payerId: ['payer_id', optional(string())],
  name: ['name', optional(lazy(() => partyNameSchema))],
  phone: ['phone', optional(lazy(() => phoneWithTypeSchema))],
  birthDate: ['birth_date', optional(string())],
  taxInfo: [
    'tax_info',
    optional(lazy(() => taxInformationPaymentMethodTokensSchema)),
  ],
  address: [
    'address',
    optional(lazy(() => portablePostalAddressMediumGrainedSchema)),
  ],
});
