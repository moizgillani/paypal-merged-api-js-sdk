/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';

/** The details of the items in the shipment. */
export interface TrackerItem {
  /** The item name or title. */
  name?: string;
  /** The item quantity. Must be a whole number. */
  quantity?: string;
  /** The stock keeping unit (SKU) for the item. This can contain unicode characters. */
  sku?: string;
  /** The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored. */
  imageUrl?: string;
  /** The Universal Product Code of the item. */
  upc?: unknown;
}

export const trackerItemSchema: Schema<TrackerItem> = object({
  name: ['name', optional(string())],
  quantity: ['quantity', optional(string())],
  sku: ['sku', optional(string())],
  imageUrl: ['image_url', optional(string())],
  upc: ['upc', optional(unknown())],
});
