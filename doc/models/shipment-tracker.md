
# Shipment Tracker

The tracking information for a shipment.

## Structure

`ShipmentTracker`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Required | The PayPal transaction ID.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `trackingNumber` | `string \| undefined` | Optional | The tracking number for the shipment. This property supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `trackingNumberType` | [`ShipmentTrackingNumberTypeEnum \| undefined`](../../doc/models/shipment-tracking-number-type-enum.md) | Optional | The type of tracking number.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[0-9A-Z_]+$` |
| `status` | [`ShipmentTrackingStatusEnum`](../../doc/models/shipment-tracking-status-enum.md) | Required | The status of the item shipment. For allowed values, see <a href="/docs/tracking/reference/shipping-status/">Shipping Statuses</a>.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[0-9A-Z_]+$` |
| `shipmentDate` | `string \| undefined` | Optional | The date when the shipment occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])$` |
| `carrier` | [`CarrierEnum \| undefined`](../../doc/models/carrier-enum.md) | Optional | The carrier for the shipment. Some carriers have a global version as well as local subsidiaries. The subsidiaries are repeated over many countries and might also have an entry in the global list. Choose the carrier for your country. If the carrier is not available for your country, choose the global version of the carrier. If your carrier name is not in the list, set `carrier` to `OTHER` and set carrier name in `carrier_name_other`. For allowed values, see <a href="/docs/tracking/reference/carriers/">Carriers</a>.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[0-9A-Z_]+$` |
| `carrierNameOther` | `string \| undefined` | Optional | The name of the carrier for the shipment. Provide this value only if the carrier parameter is OTHER. This property supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `postagePaymentId` | `string \| undefined` | Optional | The postage payment ID. This property supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `notifyBuyer` | `boolean \| undefined` | Optional | If true, sends an email notification to the buyer of the PayPal transaction. The email contains the tracking information that was uploaded through the API.<br>**Default**: `false` |
| `quantity` | `number \| undefined` | Optional | The quantity of items shipped.<br>**Constraints**: `>= 1`, `<= 100` |
| `trackingNumberValidated` | `boolean \| undefined` | Optional | Indicates whether the carrier validated the tracking number. |
| `lastUpdatedTime` | `string \| undefined` | Optional | The date and time when the tracking information was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `shipmentDirection` | [`ShipmentTrackerShipmentDirectionEnum \| undefined`](../../doc/models/shipment-tracker-shipment-direction-enum.md) | Optional | To denote whether the shipment is sent forward to the receiver or returned back.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^[0-9A-Z_]+$` |
| `shipmentUploader` | [`ShipmentTrackerShipmentUploaderEnum \| undefined`](../../doc/models/shipment-tracker-shipment-uploader-enum.md) | Optional | To denote which party uploaded the shipment tracking info.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^[0-9A-Z_]+$` |

## Example (as JSON)

```json
{
  "transaction_id": "transaction_id6",
  "status": "DELIVERY_SCHEDULED",
  "notify_buyer": false,
  "tracking_number": "tracking_number6",
  "tracking_number_type": "CARRIER_PROVIDED",
  "shipment_date": "shipment_date2",
  "carrier": "EMS",
  "carrier_name_other": "carrier_name_other0"
}
```

