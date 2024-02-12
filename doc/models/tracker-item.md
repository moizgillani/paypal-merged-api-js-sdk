
# Tracker Item

The details of the items in the shipment.

## Structure

`TrackerItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The item name or title.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `quantity` | `string \| undefined` | Optional | The item quantity. Must be a whole number.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^[1-9][0-9]{0,9}$` |
| `sku` | `string \| undefined` | Optional | The stock keeping unit (SKU) for the item. This can contain unicode characters.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `imageUrl` | `string \| undefined` | Optional | The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048`, *Pattern*: `^(https:)([/\|.\|\w\|\s\|-])*\.(?:jpg\|gif\|png\|jpeg\|JPG\|GIF\|PNG\|JPEG)` |
| `upc` | `unknown \| undefined` | Optional | The Universal Product Code of the item. |

## Example (as JSON)

```json
{
  "name": "name6",
  "quantity": "quantity2",
  "sku": "sku8",
  "image_url": "image_url2",
  "upc": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

