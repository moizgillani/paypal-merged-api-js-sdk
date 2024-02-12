/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CarrierEnum, carrierEnumSchema } from './carrierEnum';
import {
  ShipmentTrackerShipmentDirectionEnum,
  shipmentTrackerShipmentDirectionEnumSchema,
} from './shipmentTrackerShipmentDirectionEnum';
import {
  ShipmentTrackerShipmentUploaderEnum,
  shipmentTrackerShipmentUploaderEnumSchema,
} from './shipmentTrackerShipmentUploaderEnum';
import {
  ShipmentTrackingNumberTypeEnum,
  shipmentTrackingNumberTypeEnumSchema,
} from './shipmentTrackingNumberTypeEnum';
import {
  ShipmentTrackingStatusEnum,
  shipmentTrackingStatusEnumSchema,
} from './shipmentTrackingStatusEnum';
import { TrackerItem, trackerItemSchema } from './trackerItem';

/** The tracking details of an order. */
export interface OrderTrackerRequest {
  /** The PayPal transaction ID. */
  transactionId: string;
  /** The tracking number for the shipment. This property supports Unicode. */
  trackingNumber?: string;
  /** The type of tracking number. */
  trackingNumberType?: ShipmentTrackingNumberTypeEnum;
  /** The status of the item shipment. For allowed values, see <a href="/docs/tracking/reference/shipping-status/">Shipping Statuses</a>. */
  status: ShipmentTrackingStatusEnum;
  /** The date when the shipment occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  shipmentDate?: string;
  /** The carrier for the shipment. Some carriers have a global version as well as local subsidiaries. The subsidiaries are repeated over many countries and might also have an entry in the global list. Choose the carrier for your country. If the carrier is not available for your country, choose the global version of the carrier. If your carrier name is not in the list, set `carrier` to `OTHER` and set carrier name in `carrier_name_other`. For allowed values, see <a href="/docs/tracking/reference/carriers/">Carriers</a>. */
  carrier?: CarrierEnum;
  /** The name of the carrier for the shipment. Provide this value only if the carrier parameter is OTHER. This property supports Unicode. */
  carrierNameOther?: string;
  /** The postage payment ID. This property supports Unicode. */
  postagePaymentId?: string;
  /** If true, sends an email notification to the buyer of the PayPal transaction. The email contains the tracking information that was uploaded through the API. */
  notifyBuyer?: boolean;
  /** The quantity of items shipped. */
  quantity?: number;
  /** Indicates whether the carrier validated the tracking number. */
  trackingNumberValidated?: boolean;
  /** The date and time when the tracking information was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  lastUpdatedTime?: string;
  /** To denote whether the shipment is sent forward to the receiver or returned back. */
  shipmentDirection?: ShipmentTrackerShipmentDirectionEnum;
  /** To denote which party uploaded the shipment tracking info. */
  shipmentUploader?: ShipmentTrackerShipmentUploaderEnum;
  /** The PayPal capture ID. */
  captureId: string;
  /** If true, sends an email notification to the payer of the PayPal transaction. The email contains the tracking information that was uploaded through the API. */
  notifyPayer?: boolean;
  /** An array of details of items in the shipment. */
  items?: TrackerItem[];
}

export const orderTrackerRequestSchema: Schema<OrderTrackerRequest> = object({
  transactionId: ['transaction_id', string()],
  trackingNumber: ['tracking_number', optional(string())],
  trackingNumberType: [
    'tracking_number_type',
    optional(shipmentTrackingNumberTypeEnumSchema),
  ],
  status: ['status', shipmentTrackingStatusEnumSchema],
  shipmentDate: ['shipment_date', optional(string())],
  carrier: ['carrier', optional(carrierEnumSchema)],
  carrierNameOther: ['carrier_name_other', optional(string())],
  postagePaymentId: ['postage_payment_id', optional(string())],
  notifyBuyer: ['notify_buyer', optional(boolean())],
  quantity: ['quantity', optional(number())],
  trackingNumberValidated: ['tracking_number_validated', optional(boolean())],
  lastUpdatedTime: ['last_updated_time', optional(string())],
  shipmentDirection: [
    'shipment_direction',
    optional(shipmentTrackerShipmentDirectionEnumSchema),
  ],
  shipmentUploader: [
    'shipment_uploader',
    optional(shipmentTrackerShipmentUploaderEnumSchema),
  ],
  captureId: ['capture_id', string()],
  notifyPayer: ['notify_payer', optional(boolean())],
  items: ['items', optional(array(lazy(() => trackerItemSchema)))],
});
