
# Setup Token Request Payment Source

The payment method to vault with the instrument details.

## Structure

`SetupTokenRequestPaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardRequestPaymentMethodTokens \| undefined`](../../doc/models/card-request-payment-method-tokens.md) | Optional | A Resource representing a request to vault a Card. |
| `paypal` | [`PayPalWalletRequest \| undefined`](../../doc/models/pay-pal-wallet-request.md) | Optional | A resource representing a request to vault PayPal Wallet. |
| `venmo` | [`VenmoRequest \| undefined`](../../doc/models/venmo-request.md) | Optional | A resource representing a request to vault Venmo. |
| `token` | [`TokenRequest \| undefined`](../../doc/models/token-request.md) | Optional | The Tokenized Payment Source representing a Request to Vault a Token. |

## Example (as JSON)

```json
{
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
}
```

