
# Tracking Details

## Structure

`TrackingDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `trackers` | [`OrderTrackerResponse[] \| undefined`](../../doc/models/order-tracker-response.md) | Optional | An array of trackers for a transaction. |

## Example (as JSON)

```json
{
  "trackers": [
    {
      "id": "id2",
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
      ],
      "create_time": "create_time8"
    },
    {
      "id": "id2",
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
      ],
      "create_time": "create_time8"
    }
  ]
}
```

