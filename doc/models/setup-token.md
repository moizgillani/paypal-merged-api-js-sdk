
# Setup Token

Setup Token Request where the `source` defines the type of instrument to be stored.

## Structure

`SetupToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`CustomerRequest \| undefined`](../../doc/models/customer-request.md) | Optional | Customer in merchant's or partner's system of records. |
| `paymentSource` | [`SetupTokenRequestPaymentSource`](../../doc/models/setup-token-request-payment-source.md) | Required | The payment method to vault with the instrument details. |
| `metadata` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "customer": {
    "id": "id0"
  },
  "payment_source": {
    "card": {
      "id": "id6",
      "name": "name6",
      "number": "number6",
      "expiry": "expiry4",
      "security_code": "security_code8"
    },
    "paypal": {
      "description": "description2",
      "shipping": {
        "name": {
          "prefix": "prefix8",
          "given_name": "given_name2",
          "surname": "surname8",
          "middle_name": "middle_name0",
          "suffix": "suffix0"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "address_line_3": "address_line_32",
          "admin_area_4": "admin_area_40",
          "admin_area_3": "admin_area_38",
          "country_code": "country_code6"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "usage_type2",
      "customer_type": "customer_type6"
    },
    "venmo": {
      "description": "description6",
      "shipping": {
        "name": {
          "prefix": "prefix8",
          "given_name": "given_name2",
          "surname": "surname8",
          "middle_name": "middle_name0",
          "suffix": "suffix0"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "address_line_3": "address_line_32",
          "admin_area_4": "admin_area_40",
          "admin_area_3": "admin_area_38",
          "country_code": "country_code6"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "usage_type6",
      "customer_type": "customer_type0"
    },
    "token": {
      "id": "id6",
      "type": "type4",
      "attributes": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  },
  "metadata": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

