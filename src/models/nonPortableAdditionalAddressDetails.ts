/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`. */
export interface NonPortableAdditionalAddressDetails {
  /** The street number. */
  streetNumber?: string;
  /** The street name. Just `Drury` in `Drury Lane`. */
  streetName?: string;
  /** The street type. For example, avenue, boulevard, road, or expressway. */
  streetType?: string;
  /** The delivery service. Post office box, bag number, or post office name. */
  deliveryService?: string;
  /** A named locations that represents the premise. Usually a building name or number or collection of buildings with a common name or number. For example, <code>Craven House</code>. */
  buildingName?: string;
  /** The first-order entity below a named building or location that represents the sub-premises. Usually a single building within a collection of buildings with a common name. Can be a flat, story, floor, room, or apartment. */
  subBuilding?: string;
}

export const nonPortableAdditionalAddressDetailsSchema: Schema<NonPortableAdditionalAddressDetails> = object(
  {
    streetNumber: ['street_number', optional(string())],
    streetName: ['street_name', optional(string())],
    streetType: ['street_type', optional(string())],
    deliveryService: ['delivery_service', optional(string())],
    buildingName: ['building_name', optional(string())],
    subBuilding: ['sub_building', optional(string())],
  }
);
