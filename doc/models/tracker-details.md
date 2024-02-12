
# Tracker Details

## Structure

`TrackerDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The tracker id. |
| `status` | `unknown \| undefined` | Optional | - |
| `items` | [`TrackerItem[] \| undefined`](../../doc/models/tracker-item.md) | Optional | An array of details of items in the shipment. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of request-related HATEOAS links.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |

## Example (as JSON)

```json
{
  "id": "id6",
  "status": {
    "key1": "val1",
    "key2": "val2"
  },
  "items": [
    {
      "name": "name8",
      "quantity": "quantity4",
      "sku": "sku6",
      "image_url": "image_url4",
      "upc": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "links": [
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    },
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    }
  ]
}
```

