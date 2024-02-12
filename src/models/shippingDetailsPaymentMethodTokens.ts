/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { PartyName, partyNameSchema } from './partyName';
import {
  PortablePostalAddressMediumGrained,
  portablePostalAddressMediumGrainedSchema,
} from './portablePostalAddressMediumGrained';
import { ShippingType1Enum, shippingType1EnumSchema } from './shippingType1Enum';

/** The shipping details. */
export interface ShippingDetailsPaymentMethodTokens {
  /** The name of the person to whom to ship the items. Supports only the `full_name` property. */
  name?: PartyName;
  /** The method by which the payer wants to get their items from the payee e.g shipping, in-person pickup. Either type or options but not both may be present. */
  type?: ShippingType1Enum;
  /** The address of the person to whom to ship the items. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. */
  address?: PortablePostalAddressMediumGrained;
}

export const shippingDetailsPaymentMethodTokensSchema: Schema<ShippingDetailsPaymentMethodTokens> = object(
  {
    name: ['name', optional(lazy(() => partyNameSchema))],
    type: ['type', optional(shippingType1EnumSchema)],
    address: [
      'address',
      optional(lazy(() => portablePostalAddressMediumGrainedSchema)),
    ],
  }
);