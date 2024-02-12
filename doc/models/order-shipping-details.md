
# Order Shipping Details

The order shipping details.

## Structure

`OrderShippingDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`PartyName \| undefined`](../../doc/models/party-name.md) | Optional | The name of the person to whom to ship the items. Supports only the `full_name` property. |
| `type` | [`ShippingType1Enum \| undefined`](../../doc/models/shipping-type-1-enum.md) | Optional | The method by which the payer wants to get their items from the payee e.g shipping, in-person pickup. Either type or options but not both may be present.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `options` | [`ShippingOption[] \| undefined`](../../doc/models/shipping-option.md) | Optional | An array of shipping options that the payee or merchant offers to the payer to ship or pick up their items.<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `10` |
| `address` | [`PortableInternationalPostalAddress \| undefined`](../../doc/models/portable-international-postal-address.md) | Optional | The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. |
| `trackers` | [`OrderTrackerResponse[] \| undefined`](../../doc/models/order-tracker-response.md) | Optional | An array of trackers for a transaction. |

## Example (as JSON)

```json
{
  "name": {
    "prefix": "prefix8",
    "given_name": "given_name2",
    "surname": "surname8",
    "middle_name": "middle_name0",
    "suffix": "suffix0"
  },
  "type": "SHIPPING",
  "options": [
    {
      "id": "id2",
      "label": "label2",
      "type": "SHIPPING",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "selected": false
    },
    {
      "id": "id2",
      "label": "label2",
      "type": "SHIPPING",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "selected": false
    },
    {
      "id": "id2",
      "label": "label2",
      "type": "SHIPPING",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "selected": false
    }
  ],
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "admin_area_4": "admin_area_40",
    "admin_area_3": "admin_area_38",
    "country_code": "country_code6"
  },
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

