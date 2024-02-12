
# Order Capture Request

Completes an capture payment for an order.

## Structure

`OrderCaptureRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentSource` | [`PaymentSourceDefinition \| undefined`](../../doc/models/payment-source-definition.md) | Optional | The payment source definition. |

## Example (as JSON)

```json
{
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
      "type": "type4"
    },
    "paypal": {
      "vault_id": "vault_id0",
      "email_address": "email_address0",
      "name": {
        "prefix": "prefix8",
        "given_name": "given_name2",
        "surname": "surname8",
        "middle_name": "middle_name0",
        "suffix": "suffix0"
      },
      "phone": {
        "phone_type": "OTHER",
        "phone_number": {
          "country_code": "country_code2",
          "national_number": "national_number6",
          "extension_number": "extension_number8"
        }
      },
      "birth_date": "birth_date8"
    },
    "bancontact": {
      "name": "name0",
      "country_code": "country_code0",
      "experience_context": {
        "brand_name": "brand_name2",
        "locale": "locale6",
        "shipping_preference": "NO_SHIPPING",
        "return_url": "return_url4",
        "cancel_url": "cancel_url6"
      },
      "attributes": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "blik": {
      "name": "name2",
      "country_code": "country_code2",
      "email": "email4",
      "experience_context": {
        "brand_name": "brand_name2",
        "locale": "locale6",
        "shipping_preference": "NO_SHIPPING",
        "return_url": "return_url4",
        "cancel_url": "cancel_url6"
      },
      "level_0": {
        "auth_code": "auth_code8"
      },
      "one_click": {
        "auth_code": "auth_code0",
        "consumer_reference": "consumer_reference2",
        "alias_label": "alias_label6",
        "alias_key": "alias_key4"
      }
    }
  }
}
```

