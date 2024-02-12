
# Payment Token Request

Payment Token Request where the `source` defines the type of instrument to be stored.

## Structure

`PaymentTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`CustomerRequest \| undefined`](../../doc/models/customer-request.md) | Optional | Customer in merchant's or partner's system of records. |
| `paymentSource` | [`PaymentSourceRequest`](../../doc/models/payment-source-request.md) | Required | The payment method to vault with the instrument details. |
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

